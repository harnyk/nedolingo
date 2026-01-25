import type { ChangeEvent } from 'react';
import type { ClozeQuestion } from '../../types';

interface QuizClozeQuestionProps {
  exercise: ClozeQuestion;
  clozeAnswers: string[];
  onClozeAnswerChange: (index: number, value: string) => void;
  showResult: boolean;
  clozeBlankResults: boolean[];
}

export default function QuizClozeQuestion({
  exercise,
  clozeAnswers,
  onClozeAnswerChange,
  showResult,
  clozeBlankResults
}: QuizClozeQuestionProps) {
  const { segments, blanks } = exercise.cloze;

  return (
    <div className="mb-8">
      <div
        className="text-xl leading-relaxed text-gray-800 text-center"
        data-testid="quiz-cloze-question"
      >
        {segments.map((segment, index) => (
          <span key={index}>
            {segment}
            {index < blanks.length && (
              <span className="inline-block mx-1 align-middle">
                {showResult ? (
                  <ClozeBlankResult
                    blank={blanks[index]}
                    userAnswer={clozeAnswers[index] || ''}
                    isCorrect={clozeBlankResults[index]}
                  />
                ) : (
                  <ClozeBlankSelect
                    blank={blanks[index]}
                    value={clozeAnswers[index] || ''}
                    onChange={(value) => onClozeAnswerChange(index, value)}
                  />
                )}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

interface ClozeBlankSelectProps {
  blank: ClozeQuestion['cloze']['blanks'][0];
  value: string;
  onChange: (value: string) => void;
}

function ClozeBlankSelect({ blank, value, onChange }: ClozeBlankSelectProps) {
  return (
    <select
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
      className={`
        px-3 py-2 border-2 rounded-lg text-lg
        focus:outline-none focus:border-blue-500
        ${value ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}
      `}
      data-testid="cloze-blank-select"
    >
      <option value="">({blank.baseForm})</option>
      {blank.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

interface ClozeBlankResultProps {
  blank: ClozeQuestion['cloze']['blanks'][0];
  userAnswer: string;
  isCorrect: boolean;
}

function ClozeBlankResult({ blank, userAnswer, isCorrect }: ClozeBlankResultProps) {
  if (isCorrect) {
    return (
      <span
        className="px-3 py-1 bg-green-100 text-green-700 font-semibold rounded-lg border-2 border-green-300"
        data-testid="cloze-blank-correct"
      >
        {userAnswer}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1" data-testid="cloze-blank-incorrect">
      <span className="px-3 py-1 bg-red-100 text-red-700 font-semibold rounded-lg border-2 border-red-300 line-through">
        {userAnswer || '—'}
      </span>
      <span className="px-3 py-1 bg-green-100 text-green-700 font-semibold rounded-lg border-2 border-green-300">
        {blank.correctAnswer}
      </span>
    </span>
  );
}
