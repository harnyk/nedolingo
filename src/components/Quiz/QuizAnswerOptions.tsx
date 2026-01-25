import type { ChangeEvent, KeyboardEvent } from 'react';
import type { QuizAnswerOptionsProps } from '../../types';

export default function QuizAnswerOptions({
  exercise,
  selectedOption,
  onSelectOption,
  textInput,
  onTextInputChange,
  onSubmit,
  showResult,
  t
}: QuizAnswerOptionsProps) {
  // For cloze questions, answers are rendered inline in the question
  if (showResult || exercise.type === 'cloze') {
    return null;
  }

  return (
    <div className="space-y-4 mb-8" data-testid="quiz-answer-options">
      {exercise.type === 'multiple-choice' ? (
        (exercise.options ?? []).map((option) => (
          <button
            key={option}
            onClick={() => onSelectOption(option)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
              selectedOption === option
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
            data-testid="quiz-option-button"
          >
            {option}
          </button>
        ))
      ) : (
        <input
          type="text"
          value={textInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onTextInputChange(e.target.value)}
          onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && textInput && onSubmit()}
          placeholder={t('quiz.type_answer')}
          className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
          autoFocus
          data-testid="quiz-text-input"
        />
      )}
    </div>
  );
}
