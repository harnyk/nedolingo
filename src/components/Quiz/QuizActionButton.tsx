import { useCallback, useEffect, useRef } from 'react';
import type { QuizActionButtonProps } from '../../types';

export default function QuizActionButton({
  showResult,
  isLastQuestion,
  disabled,
  onCheck,
  onNext,
  t
}: QuizActionButtonProps) {
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const handleCheckClick = useCallback(() => {
    onCheck();
  }, [onCheck]);

  const handleNextClick = useCallback(() => {
    onNext();
  }, [onNext]);

  const handleNextKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        onNext();
      }
    },
    [onNext]
  );

  useEffect(() => {
    if (showResult) {
      nextButtonRef.current?.focus();
    }
  }, [showResult]);

  if (!showResult) {
    return (
      <button
        onClick={handleCheckClick}
        disabled={disabled}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {t('quiz.check_answer')}
      </button>
    );
  }

  return (
    <button
      onClick={handleNextClick}
      ref={nextButtonRef}
      onKeyDown={handleNextKeyDown}
      className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200"
    >
      {isLastQuestion ? t('quiz.view_results') : t('quiz.next_question')}
    </button>
  );
}
