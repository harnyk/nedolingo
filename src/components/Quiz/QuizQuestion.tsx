import type { QuizQuestionProps } from '../../types';

export default function QuizQuestion({ question }: QuizQuestionProps) {
  return (
    <div className="mb-8">
      <h2
        className="text-2xl font-bold text-gray-800 text-center"
        data-testid="quiz-question-heading"
      >
        {question}
      </h2>
    </div>
  );
}
