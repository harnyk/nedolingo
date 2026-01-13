/**
 * Quiz State/Runtime Domain Types
 *
 * Contains types related to quiz execution state,
 * user interactions, and runtime data.
 */

import { Question } from './quiz';

/**
 * Represents a question that has been answered by the user
 * Extends Question with user's answer and correctness status
 */
export interface CompletedExercise extends Question {
  /** The answer provided by the user */
  userAnswer: string;

  /** Whether the user's answer was correct */
  isCorrect: boolean;
}