import { describe, it, expect } from 'vitest';
import { selectQuestions } from './quiz-selection';

const makeQuestion = (id: number, answer: string) => ({
  question: `Question ${id}`,
  type: 'multiple-choice' as const,
  correctAnswer: answer
});

describe('selectQuestions', () => {
  it('limits the selection size', () => {
    const questions = [
      makeQuestion(1, 'A'),
      makeQuestion(2, 'B'),
      makeQuestion(3, 'C'),
      makeQuestion(4, 'D')
    ];

    const selection = selectQuestions({ questions, maxQuestions: 2 });

    expect(selection).toHaveLength(2);
  });

  it('returns all questions when maxQuestions is not set', () => {
    const questions = [
      makeQuestion(1, 'A'),
      makeQuestion(2, 'B'),
      makeQuestion(3, 'C')
    ];

    const selection = selectQuestions({ questions });

    expect(selection).toHaveLength(3);
  });

  it('keeps original order when noShuffle is true', () => {
    const questions = [
      makeQuestion(1, 'A'),
      makeQuestion(2, 'A'),
      makeQuestion(3, 'B')
    ];

    const selection = selectQuestions({
      questions,
      maxQuestions: 2,
      noShuffle: true
    });

    expect(selection.map((question) => question.question)).toEqual([
      'Question 1',
      'Question 2'
    ]);
  });

  it('balances answers when limiting the selection', () => {
    const questions = [
      ...Array.from({ length: 8 }, (_, i) => makeQuestion(i + 1, 'A')),
      ...Array.from({ length: 4 }, (_, i) => makeQuestion(i + 9, 'B'))
    ];

    const selection = selectQuestions({ questions, maxQuestions: 10 });
    const uniqueAnswers = new Set(selection.map((question) => question.correctAnswer));

    expect(uniqueAnswers.size).toBeGreaterThan(1);
  });
});
