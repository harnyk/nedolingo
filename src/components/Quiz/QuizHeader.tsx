import { ArrowLeft } from 'lucide-react';
import type { QuizHeaderProps } from '../../types';

export default function QuizHeader({ title, onBack, t }: QuizHeaderProps) {
  return (
    <div className="mb-6">
      <button
        onClick={onBack}
        className="text-gray-600 hover:text-gray-800 flex items-center gap-2 mb-4 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        {t('quiz.back_to_quizzes')}
      </button>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
  );
}
