import { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Trophy, ArrowLeft } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

export default function Quiz({ quiz, onBack }) {
  const { t } = useI18n();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [textInput, setTextInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const exercises = quiz.questions;
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('results.title')}</h1>
            <p className="text-xl text-gray-600">
              {t('results.score')}: <span className="font-bold text-green-600">{score}</span>/{exercises.length}
            </p>
          </div>

          {incorrectExercises.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('results.review_incorrect')}</h2>
              <div className="space-y-4">
                {incorrectExercises.map((exercise, index) => (
                  <div key={index} className="border border-red-200 rounded-lg p-4 bg-red-50">
                    <p className="font-medium text-gray-800 mb-2">{exercise.question}</p>
                    <p className="text-sm text-gray-600 mb-1">
                      {t('results.your_answer')} <span className="font-medium">{exercise.userAnswer || t('results.no_answer')}</span>
                    </p>
                    <p className="text-sm text-green-600 font-medium">
                      {t('results.correct_answer')} {exercise.correctAnswer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="flex-1 bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              {t('results.back_to_quizzes')}
            </button>
            <button
              onClick={resetQuiz}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              {t('results.try_again')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('quiz.back_to_quizzes')}
          </button>
          <h2 className="text-2xl font-bold text-gray-800">{quiz.title}</h2>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{t('quiz.question_progress', { current: currentExerciseIndex + 1, total: exercises.length })}</span>
            <span>{Math.round(getProgressPercentage())}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            {currentExercise.question}
          </h2>
        </div>

        {/* Answer Options */}
        {!showResult && (
          <div className="space-y-4 mb-8">
            {currentExercise.type === 'multiple-choice' ? (
              currentExercise.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedOption === option
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))
            ) : (
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && textInput && checkAnswer()}
                placeholder={t('quiz.type_answer')}
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                autoFocus
              />
            )}
          </div>
        )}

        {/* Result Display */}
        {showResult && (
          <div className="mb-8 text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}>
              {isCorrect ? <CheckCircle className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
            </div>
            <p className={`text-lg font-semibold mb-2 ${
              isCorrect ? 'text-green-600' : 'text-red-600'
            }`}>
              {isCorrect ? t('quiz.correct') : t('quiz.incorrect')}
            </p>
            {!isCorrect && (
              <p className="text-gray-600">
                {t('quiz.correct_answer_is')} <span className="font-semibold text-gray-800">{currentExercise.correctAnswer}</span>
              </p>
            )}
          </div>
        )}

        {/* Action Button */}
        {!showResult ? (
          <button
            onClick={checkAnswer}
            disabled={
              currentExercise.type === 'multiple-choice'
                ? !selectedOption
                : !textInput.trim()
            }
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('quiz.check_answer')}
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200"
          >
            {currentExerciseIndex < exercises.length - 1 ? t('quiz.next_question') : t('quiz.view_results')}
          </button>
        )}
      </div>
    </div>
  );
}
