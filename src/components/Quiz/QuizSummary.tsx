import { Trophy, ArrowLeft, RotateCcw } from 'lucide-react';
import type { QuizSummaryProps } from '../../types';

export default function QuizSummary({
  score,
  totalExercises,
  incorrectExercises,
  onBack,
  onRetry,
  t
}: QuizSummaryProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('results.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('results.score')}: <span className="font-bold text-green-600">{score}</span>/{totalExercises}
          </p>
        </div>

        {incorrectExercises.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('results.review_incorrect')}</h2>
            <div className="space-y-4" data-testid="quiz-incorrect-cards-container">
              {incorrectExercises.map((exercise, index) => (
                <div
                  key={index}
                  className="border border-red-200 rounded-lg p-4 bg-red-50"
                  data-testid="quiz-incorrect-card"
                >
                  <p
                    className="font-medium text-gray-800 mb-2"
                    data-testid="quiz-incorrect-question"
                  >
                    {exercise.question}
                  </p>
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
            onClick={onRetry}
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
