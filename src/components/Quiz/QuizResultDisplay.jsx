import { CheckCircle, XCircle } from 'lucide-react';

export default function QuizResultDisplay({ isCorrect, userAnswer, correctAnswer, t }) {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
          isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
        }`}>
          {isCorrect ? <CheckCircle className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
        </div>
        <p className={`text-lg font-semibold ${
          isCorrect ? 'text-green-600' : 'text-red-600'
        }`}>
          {isCorrect ? t('quiz.correct') : t('quiz.incorrect')}
        </p>
      </div>

      <div className="space-y-3">
        {/* User's Answer */}
        <div className={`p-4 rounded-lg border-2 flex items-center gap-3 ${
          isCorrect
            ? 'bg-green-50 border-green-300'
            : 'bg-red-50 border-red-300'
        }`}>
          {isCorrect ? (
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
          ) : (
            <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
          )}
          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-1">{t('results.your_answer')}</p>
            <p className={`text-xl font-semibold ${
              isCorrect
                ? 'text-green-700'
                : 'text-red-700'
            }`}>
              {userAnswer || t('results.no_answer')}
            </p>
          </div>
        </div>

        {/* Correct Answer (only if incorrect) */}
        {!isCorrect && (
          <div className="p-4 rounded-lg border-2 bg-green-50 border-green-300 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-1">{t('results.correct_answer')}</p>
              <p className="text-xl font-semibold text-green-700">
                {correctAnswer}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
