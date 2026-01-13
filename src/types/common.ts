/**
 * Common/Shared Types
 *
 * Contains types used across multiple domains
 * and general utility types.
 */

/**
 * Translation function type
 * Used throughout the application for i18n
 *
 * @param key - Translation key (e.g., 'quiz.check_answer')
 * @param params - Optional parameters to interpolate into the translation
 * @returns Translated string
 */
export type TranslationFunction = (key: string, params?: Record<string, any>) => string;