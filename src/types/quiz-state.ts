/**
 * Quiz State/Runtime Domain Types
 *
 * Contains types related to quiz execution state,
 * user interactions, and runtime data.
 */

import { Question } from './quiz';

/**
 * Represents user's answers for a cloze question
 */
export interface ClozeUserAnswer {
  /** User's answers for each blank */
  answers: string[];

  /** Whether each blank was answered correctly */
  correctness: boolean[];
}

/**
 * Represents a question that has been answered by the user
 * Combines Question with user's answer and correctness status
 */
export type CompletedExercise = Question & {
  /** The answer provided by the user (string for regular, ClozeUserAnswer for cloze) */
  userAnswer: string | ClozeUserAnswer;

  /** Whether the user's answer was correct */
  isCorrect: boolean;
};