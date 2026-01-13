/**
 * Barrel export file for all TypeScript types
 *
 * Provides convenient imports from a single entry point:
 * import { Quiz, QuizProps, TranslationFunction } from '@/types';
 */

// Core Quiz Domain
export type { Quiz, Question, QuizzesMap } from './quiz';

// Quiz State Domain
export type { CompletedExercise } from './quiz-state';

// Common Types
export type { TranslationFunction } from './common';

// Component Props
export type {
  QuizProps,
  QuizHeaderProps,
  QuizProgressBarProps,
  QuizQuestionProps,
  QuizAnswerOptionsProps,
  QuizResultDisplayProps,
  QuizActionButtonProps,
  QuizSummaryProps,
} from './component-props';