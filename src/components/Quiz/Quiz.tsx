import { useEffect, useMemo, useRef, useState } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import QuizSummary from './QuizSummary';
import QuizHeader from './QuizHeader';
import QuizProgressBar from './QuizProgressBar';
import QuizQuestion from './QuizQuestion';
import QuizAnswerOptions from './QuizAnswerOptions';
import QuizResultDisplay from './QuizResultDisplay';
import QuizActionButton from './QuizActionButton';
import type { CompletedExercise, QuizProps, ClozeUserAnswer } from '../../types';
import { selectQuestions } from '../../utils/quiz-selection';
import { shuffleClozeOptions } from '../../utils/cloze-parser';

export default function Quiz({ quiz, onBack, onDirtyStateChange }: QuizProps) {
  const { t } = useI18n();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [textInput, setTextInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswerForDisplay, setUserAnswerForDisplay] = useState<string | ClozeUserAnswer>('');
  const [score, setScore] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<CompletedExercise[]>([]);
  const [showSummary, setShowSummary] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const lastSelectionRef = useRef<string[] | null>(null);

  // Cloze question state
  const [clozeAnswers, setClozeAnswers] = useState<string[]>([]);
  const [clozeBlankResults, setClozeBlankResults] = useState<boolean[]>([]);

  // Track dirty state: quiz is dirty if user has answered questions but hasn't finished
  useEffect(() => {
    if (onDirtyStateChange) {
      const isDirty = completedExercises.length > 0 && !showSummary;
      onDirtyStateChange(isDirty);
    }
  }, [completedExercises.length, showSummary, onDirtyStateChange]);

  // Shuffle questions and options by default (unless noShuffle is true)
  const exercises = useMemo(() => {
    const shuffleArray = <T,>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    let questions = selectQuestions({
      questions: quiz.questions,
      maxQuestions: quiz.maxQuestions,
      noShuffle: quiz.noShuffle,
      previousSelection: lastSelectionRef.current
    });

    // Shuffle options for each question unless noShuffle is set
    questions = questions.map((question) => {
      const shouldShuffle = !quiz.noShuffle && !question.noShuffle;

      if (question.type === 'multiple-choice') {
        return {
          ...question,
          options: shouldShuffle ? shuffleArray(question.options) : question.options
        };
      }

      if (question.type === 'cloze') {
        return {
          ...question,
          cloze: shuffleClozeOptions(question.cloze, shouldShuffle)
        };
      }

      return question;
    });

    return questions;
  }, [quiz.questions, quiz.noShuffle, quiz.maxQuestions, shuffleSeed]);
  const currentExercise = exercises[currentExerciseIndex];

  const normalizeAnswer = (answer: string) => {
    return answer.trim().toLowerCase();
  };

  const checkAnswer = () => {
    let userAnswer: string | ClozeUserAnswer = '';
    let correct = false;

    if (currentExercise.type === 'multiple-choice') {
      userAnswer = selectedOption;
      correct = userAnswer === currentExercise.correctAnswer;
    } else if (currentExercise.type === 'text-input') {
      userAnswer = textInput;
      correct = normalizeAnswer(userAnswer) === normalizeAnswer(currentExercise.correctAnswer);
    } else if (currentExercise.type === 'cloze') {
      // Check each blank in the cloze question
      const blanks = currentExercise.cloze.blanks;
      const correctness = blanks.map((blank, index) => clozeAnswers[index] === blank.correctAnswer);
      correct = correctness.every(Boolean);

      userAnswer = {
        answers: [...clozeAnswers],
        correctness
      };

      setClozeBlankResults(correctness);
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
      setClozeAnswers([]);
      setClozeBlankResults([]);
    } else {
      setShowSummary(true);
    }
  };

  const handleClozeAnswerChange = (index: number, value: string) => {
    setClozeAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  const resetQuiz = () => {
    lastSelectionRef.current = exercises.map((exercise) =>
      exercise.type === 'cloze' ? exercise.rawText : exercise.question
    );
    setCurrentExerciseIndex(0);
    setSelectedOption('');
    setTextInput('');
    setClozeAnswers([]);
    setClozeBlankResults([]);
    setShowResult(false);
    setIsCorrect(false);
    setUserAnswerForDisplay('');
    setScore(0);
    setCompletedExercises([]);
    setShowSummary(false);
    setShuffleSeed((prev) => prev + 1);
  };

  const getProgressPercentage = () => {
    return (completedExercises.length / exercises.length) * 100;
  };

  if (!currentExercise) {
    return null;
  }

  if (showSummary) {
    const incorrectExercises = completedExercises.filter((exercise) => !exercise.isCorrect);

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

        <QuizQuestion
          exercise={currentExercise}
          clozeAnswers={clozeAnswers}
          onClozeAnswerChange={handleClozeAnswerChange}
          showResult={showResult}
          clozeBlankResults={clozeBlankResults}
        />

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
            correctAnswer={currentExercise.type !== 'cloze' ? currentExercise.correctAnswer : ''}
            exercise={currentExercise}
            t={t}
          />
        )}

        <QuizActionButton
          showResult={showResult}
          isLastQuestion={currentExerciseIndex >= exercises.length - 1}
          disabled={
            currentExercise.type === 'multiple-choice'
              ? !selectedOption
              : currentExercise.type === 'text-input'
                ? !textInput.trim()
                : currentExercise.type === 'cloze'
                  ? clozeAnswers.length < currentExercise.cloze.blanks.length ||
                    clozeAnswers.some((a) => !a)
                  : true
          }
          onCheck={checkAnswer}
          onNext={handleNext}
          t={t}
        />
      </div>
    </div>
  );
}
