import type { QuizProgressBarProps } from '../../types';

export default function QuizProgressBar({ current, total, percentage, t }: QuizProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>{t('quiz.question_progress', { current, total })}</span>
        <span data-testid="quiz-progress-percentage">{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
          data-testid="quiz-progress-bar"
        ></div>
      </div>
    </div>
  );
}
