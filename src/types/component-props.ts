/**
 * Component Props Domain Types
 *
 * Contains TypeScript interfaces for all React component props.
 * Organized by component hierarchy.
 */

import { Quiz, Question } from './quiz';
import { CompletedExercise } from './quiz-state';
import { TranslationFunction } from './common';

// ============================================================================
// Main Quiz Component Props
// ============================================================================

/**
 * Props for the main Quiz component
 */
export interface QuizProps {
  /** The quiz data to display */
  quiz: Quiz;

  /** Callback when user wants to go back to quiz list */
  onBack: () => void;

  /** Callback to notify parent when quiz dirty state changes */
  onDirtyStateChange?: (isDirty: boolean) => void;
}

// ============================================================================
// Quiz Sub-Component Props
// ============================================================================

/**
 * Props for the QuizHeader component
 */
export interface QuizHeaderProps {
  /** The quiz title to display */
  title: string;

  /** Callback when back button is clicked */
  onBack: () => void;

  /** Translation function */
  t: TranslationFunction;
}

/**
 * Props for the QuizProgressBar component
 */
export interface QuizProgressBarProps {
  /** Current question number (1-indexed) */
  current: number;

  /** Total number of questions */
  total: number;

  /** Progress percentage (0-100) */
  percentage: number;

  /** Translation function */
  t: TranslationFunction;
}

/**
 * Props for the QuizQuestion component
 */
export interface QuizQuestionProps {
  /** The question text to display */
  question: string;
}

/**
 * Props for the QuizAnswerOptions component
 */
export interface QuizAnswerOptionsProps {
  /** The current exercise/question */
  exercise: Question;

  /** Currently selected option (for multiple-choice) */
  selectedOption: string;

  /** Callback when an option is selected */
  onSelectOption: (option: string) => void;

  /** Current text input value (for text-input questions) */
  textInput: string;

  /** Callback when text input changes */
  onTextInputChange: (value: string) => void;

  /** Callback when user submits their answer */
  onSubmit: () => void;

  /** Whether to show the result (hides answer options when true) */
  showResult: boolean;

  /** Translation function */
  t: TranslationFunction;
}

/**
 * Props for the QuizResultDisplay component
 */
export interface QuizResultDisplayProps {
  /** Whether the user's answer was correct */
  isCorrect: boolean;

  /** The answer provided by the user */
  userAnswer: string;

  /** The correct answer */
  correctAnswer: string;

  /** Translation function */
  t: TranslationFunction;
}

/**
 * Props for the QuizActionButton component
 */
export interface QuizActionButtonProps {
  /** Whether to show result state (changes button from "Check" to "Next") */
  showResult: boolean;

  /** Whether this is the last question in the quiz */
  isLastQuestion: boolean;

  /** Whether the button should be disabled */
  disabled: boolean;

  /** Callback when "Check Answer" button is clicked */
  onCheck: () => void;

  /** Callback when "Next" button is clicked */
  onNext: () => void;

  /** Translation function */
  t: TranslationFunction;
}

/**
 * Props for the QuizSummary component
 */
export interface QuizSummaryProps {
  /** User's score (number of correct answers) */
  score: number;

  /** Total number of exercises in the quiz */
  totalExercises: number;

  /** Array of incorrectly answered exercises for review */
  incorrectExercises: CompletedExercise[];

  /** Callback when user wants to return to quiz list */
  onBack: () => void;

  /** Callback when user wants to retry the quiz */
  onRetry: () => void;

  /** Translation function */
  t: TranslationFunction;
}