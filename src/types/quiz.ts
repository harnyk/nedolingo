/**
 * Core Quiz Domain Types
 *
 * Contains the fundamental data structures that represent
 * a quiz and its questions as stored in YAML files.
 */

/**
 * Represents a single question/exercise in a quiz
 */
export interface Question {
  /** The question text displayed to the user */
  question: string;

  /** The type of question */
  type: 'multiple-choice' | 'text-input';

  /** Available options for multiple-choice questions */
  options?: string[];

  /** The correct answer for this question */
  correctAnswer: string;

  /** If true, disables shuffling for this specific question's options */
  noShuffle?: boolean;
}

/**
 * Represents a complete quiz
 */
export interface Quiz {
  /** The quiz title */
  title: string;

  /** Unique identifier for the quiz (used in URLs) */
  slug: string;

  /** Brief description of what the quiz covers */
  description: string;

  /** Array of questions in this quiz */
  questions: Question[];

  /** If true, disables shuffling of questions and options */
  noShuffle?: boolean;
}

/**
 * Map of quiz slugs to Quiz objects for quick lookup
 */
export type QuizzesMap = Record<string, Quiz>;