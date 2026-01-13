import type { Question } from '../types';

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const clampLimit = (limit: number | undefined, total: number) => {
  if (typeof limit !== 'number') {
    return total;
  }
  return Math.max(0, Math.min(total, Math.floor(limit)));
};

const balanceByAnswer = (questions: Question[], limit: number) => {
  if (limit >= questions.length) {
    return questions;
  }

  const groups = new Map<string, Question[]>();
  const groupOrder: string[] = [];

  for (const question of questions) {
    const key = question.correctAnswer;
    if (!groups.has(key)) {
      groups.set(key, []);
      groupOrder.push(key);
    }
    groups.get(key)?.push(question);
  }

  if (groupOrder.length <= 1) {
    return questions.slice(0, limit);
  }

  const selection: Question[] = [];
  let hasRemaining = true;
  while (selection.length < limit && hasRemaining) {
    hasRemaining = false;
    for (const key of groupOrder) {
      const group = groups.get(key);
      if (group && group.length > 0) {
        selection.push(group.shift() as Question);
        hasRemaining = true;
        if (selection.length >= limit) {
          break;
        }
      }
    }
  }

  return selection;
};

type SelectQuestionsOptions = {
  questions: Question[];
  maxQuestions?: number;
  noShuffle?: boolean;
  previousSelection?: string[] | null;
};

export const selectQuestions = ({
  questions,
  maxQuestions,
  noShuffle,
  previousSelection
}: SelectQuestionsOptions): Question[] => {
  const limit = clampLimit(maxQuestions, questions.length);

  const buildSelection = () => {
    const shuffled = noShuffle ? [...questions] : shuffleArray(questions);
    if (noShuffle || limit >= shuffled.length) {
      return shuffled.slice(0, limit);
    }
    return balanceByAnswer(shuffled, limit);
  };

  if (!noShuffle && previousSelection && limit < questions.length) {
    const previousSet = new Set(previousSelection);
    for (let attempt = 0; attempt < 5; attempt++) {
      const selection = buildSelection();
      const matchesPrevious = selection.length === previousSet.size
        && selection.every((question) => previousSet.has(question.question));
      if (!matchesPrevious) {
        return selection;
      }
    }
  }

  return buildSelection();
};
