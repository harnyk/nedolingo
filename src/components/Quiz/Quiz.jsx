import { useState, useMemo, useEffect } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import QuizSummary from './QuizSummary';
import QuizHeader from './QuizHeader';
import QuizProgressBar from './QuizProgressBar';
import QuizQuestion from './QuizQuestion';
import QuizAnswerOptions from './QuizAnswerOptions';
import QuizResultDisplay from './QuizResultDisplay';
import QuizActionButton from './QuizActionButton';

export default function Quiz({ quiz, onBack, onDirtyStateChange }) {
  const { t } = useI18n();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [textInput, setTextInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswerForDisplay, setUserAnswerForDisplay] = useState('');
  const [score, setScore] = useState(0);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  // Track dirty state: quiz is dirty if user has answered questions but hasn't finished
  useEffect(() => {
    if (onDirtyStateChange) {
      const isDirty = completedExercises.length > 0 && !showSummary;
      onDirtyStateChange(isDirty);
    }
  }, [completedExercises.length, showSummary, onDirtyStateChange]);

  // Shuffle questions and options by default (unless noShuffle is true)
  const exercises = useMemo(() => {
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Shuffle questions unless noShuffle is set at quiz level
    let questions = quiz.noShuffle ? quiz.questions : shuffleArray(quiz.questions);

    // Shuffle options for each multiple-choice question unless noShuffle is set
    questions = questions.map(question => {
      if (question.type === 'multiple-choice' && question.options) {
        const shouldShuffle = !quiz.noShuffle && !question.noShuffle;
        return {
          ...question,
          options: shouldShuffle ? shuffleArray(question.options) : question.options
        };
      }
      return question;
    });

    return questions;
  }, [quiz.questions, quiz.noShuffle]);
  const currentExercise = exercises[currentExerciseIndex];

  const normalizeAnswer = (answer) => {
    return answer.trim().toLowerCase();
  };

  const checkAnswer = () => {
    let userAnswer = '';
    let correct = false;

    if (currentExercise.type === 'multiple-choice') {
      userAnswer = selectedOption;
      correct = userAnswer === currentExercise.correctAnswer;
    } else {
      userAnswer = textInput;
      correct = normalizeAnswer(userAnswer) === normalizeAnswer(currentExercise.correctAnswer);
    }

    setIsCorrect(correct);
    setUserAnswerForDisplay(userAnswer);
    setShowResult(true);

    if (correct) {
      setScore(score + 1);
    }

    setCompletedExercises([
      ...completedExercises,
      {
        ...currentExercise,
        userAnswer,
        isCorrect: correct
      }
    ]);

    setSelectedOption('');
    setTextInput('');
  };

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setShowResult(false);
    } else {
      setShowSummary(true);
    }
  };

  const resetQuiz = () => {
    setCurrentExerciseIndex(0);
    setSelectedOption('');
    setTextInput('');
    setShowResult(false);
    setIsCorrect(false);
    setUserAnswerForDisplay('');
    setScore(0);
    setCompletedExercises([]);
    setShowSummary(false);
  };

  const getProgressPercentage = () => {
    return ((currentExerciseIndex + 1) / exercises.length) * 100;
  };

  if (showSummary) {
    const incorrectExercises = completedExercises.filter(ex => !ex.isCorrect);

    return (
      <QuizSummary
        score={score}
        totalExercises={exercises.length}
        incorrectExercises={incorrectExercises}
        onBack={onBack}
        onRetry={resetQuiz}
        t={t}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <QuizHeader title={quiz.title} onBack={onBack} t={t} />

        <QuizProgressBar
          current={currentExerciseIndex + 1}
          total={exercises.length}
          percentage={getProgressPercentage()}
          t={t}
        />

        <QuizQuestion question={currentExercise.question} />

        <QuizAnswerOptions
          exercise={currentExercise}
          selectedOption={selectedOption}
          onSelectOption={setSelectedOption}
          textInput={textInput}
          onTextInputChange={setTextInput}
          onSubmit={checkAnswer}
          showResult={showResult}
          t={t}
        />

        {showResult && (
          <QuizResultDisplay
            isCorrect={isCorrect}
            userAnswer={userAnswerForDisplay}
            correctAnswer={currentExercise.correctAnswer}
            t={t}
          />
        )}

        <QuizActionButton
          showResult={showResult}
          isLastQuestion={currentExerciseIndex >= exercises.length - 1}
          disabled={
            currentExercise.type === 'multiple-choice'
              ? !selectedOption
              : !textInput.trim()
          }
          onCheck={checkAnswer}
          onNext={handleNext}
          t={t}
        />
      </div>
    </div>
  );
}
