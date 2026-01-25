/**
 * Core Quiz Domain Types
 *
 * Contains the fundamental data structures that represent
 * a quiz and its questions as stored in YAML files.
 */

/**
 * Base properties shared by all question types
 */
interface BaseQuestion {
  /** If true, disables shuffling for this specific question's options */
  noShuffle?: boolean;
}

/**
 * Represents a multiple-choice question
 */
export interface MultipleChoiceQuestion extends BaseQuestion {
  /** The question text displayed to the user */
  question: string;

  /** The type of question */
  type: 'multiple-choice';

  /** Available options for multiple-choice questions */
  options: string[];

  /** The correct answer for this question */
  correctAnswer: string;
}

/**
 * Represents a text-input question
 */
export interface TextInputQuestion extends BaseQuestion {
  /** The question text displayed to the user */
  question: string;

  /** The type of question */
  type: 'text-input';

  /** The correct answer for this question */
  correctAnswer: string;
}

/**
 * Represents a single blank in a cloze question
 */
export interface ClozeBlank {
  /** The base/dictionary form of the word (shown as placeholder) */
  baseForm: string;

  /** The correct answer for this blank */
  correctAnswer: string;

  /** All options including correct and incorrect answers */
  options: string[];
}

/**
 * Parsed data from a cloze question template
 */
export interface ParsedClozeData {
  /** Text segments between blanks */
  segments: string[];

  /** Array of blanks with their options */
  blanks: ClozeBlank[];
}

/**
 * Represents a cloze (fill-in-the-blank) question
 */
export interface ClozeQuestion extends BaseQuestion {
  /** The type of question */
  type: 'cloze';

  /** The raw template text (for identification/display) */
  rawText: string;

  /** Parsed cloze data with segments and blanks */
  cloze: ParsedClozeData;
}

/**
 * Union type for all question types
 */
export type Question = MultipleChoiceQuestion | TextInputQuestion | ClozeQuestion;

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

  /** Limit how many questions to present after shuffling */
  maxQuestions?: number;

  /** If true, disables shuffling of questions and options */
  noShuffle?: boolean;
}

/**
 * Map of quiz slugs to Quiz objects for quick lookup
 */
export type QuizzesMap = Record<string, Quiz>;
