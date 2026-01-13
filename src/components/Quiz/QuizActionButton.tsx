import type { QuizActionButtonProps } from '../../types';

export default function QuizActionButton({
  showResult,
  isLastQuestion,
  disabled,
  onCheck,
  onNext,
  t
}: QuizActionButtonProps) {
  if (!showResult) {
    return (
      <button
        onClick={onCheck}
        disabled={disabled}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {t('quiz.check_answer')}
      </button>
    );
  }

  return (
    <button
      onClick={onNext}
      className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200"
    >
      {isLastQuestion ? t('quiz.view_results') : t('quiz.next_question')}
    </button>
  );
}
