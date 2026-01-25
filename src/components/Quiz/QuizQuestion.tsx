import type { QuizQuestionProps, ClozeQuestion } from '../../types';
import QuizClozeQuestion from './QuizClozeQuestion';

export default function QuizQuestion({
  exercise,
  clozeAnswers = [],
  onClozeAnswerChange,
  showResult = false,
  clozeBlankResults = []
}: QuizQuestionProps) {
  // Handle cloze questions
  if (exercise.type === 'cloze') {
    return (
      <QuizClozeQuestion
        exercise={exercise as ClozeQuestion}
        clozeAnswers={clozeAnswers}
        onClozeAnswerChange={onClozeAnswerChange || (() => {})}
        showResult={showResult}
        clozeBlankResults={clozeBlankResults}
      />
    );
  }

  // Regular questions (multiple-choice and text-input)
  return (
    <div className="mb-8">
      <h2
        className="text-2xl font-bold text-gray-800 text-center"
        data-testid="quiz-question-heading"
      >
        {exercise.question}
      </h2>
    </div>
  );
}
