import type { ParsedClozeData, ClozeBlank } from '../types';

/**
 * Parses a cloze template text into segments and blanks.
 *
 * Format: {baseForm|+correct|-wrong1|-wrong2}
 * - baseForm: the dictionary/base form shown as placeholder
 * - +correct: the correct answer (prefixed with +)
 * - -wrong: incorrect options (prefixed with -)
 *
 * @example
 * parseClozeText("Wczoraj {iść|+poszedłem|-poszedł|-idę} do sklepu.")
 * // Returns:
 * // {
 * //   segments: ["Wczoraj ", " do sklepu."],
 * //   blanks: [{
 * //     baseForm: "iść",
 * //     correctAnswer: "poszedłem",
 * //     options: ["poszedłem", "poszedł", "idę"]
 * //   }]
 * // }
 */
export function parseClozeText(text: string): ParsedClozeData {
  const segments: string[] = [];
  const blanks: ClozeBlank[] = [];

  // Regex to match cloze blanks: {baseForm|+correct|-wrong1|-wrong2}
  const blankRegex = /\{([^}]+)\}/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = blankRegex.exec(text)) !== null) {
    // Add the text segment before this blank
    segments.push(text.slice(lastIndex, match.index));

    // Parse the blank content
    const blankContent = match[1];
    const parts = blankContent.split('|');

    if (parts.length < 2) {
      throw new Error(`Invalid cloze blank format: ${match[0]}`);
    }

    const baseForm = parts[0];
    let correctAnswer = '';
    const options: string[] = [];

    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];
      if (part.startsWith('+')) {
        correctAnswer = part.slice(1);
        options.push(correctAnswer);
      } else if (part.startsWith('-')) {
        options.push(part.slice(1));
      } else {
        // Treat as incorrect if no prefix
        options.push(part);
      }
    }

    if (!correctAnswer) {
      throw new Error(`No correct answer found in cloze blank: ${match[0]}`);
    }

    blanks.push({
      baseForm,
      correctAnswer,
      options
    });

    lastIndex = match.index + match[0].length;
  }

  // Add the remaining text after the last blank
  segments.push(text.slice(lastIndex));

  return { segments, blanks };
}

/**
 * Shuffles the options in each blank of a parsed cloze.
 * Returns a new ParsedClozeData with shuffled options (does not mutate input).
 */
export function shuffleClozeOptions(cloze: ParsedClozeData, shouldShuffle: boolean): ParsedClozeData {
  if (!shouldShuffle) {
    return cloze;
  }

  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return {
    segments: cloze.segments,
    blanks: cloze.blanks.map((blank) => ({
      ...blank,
      options: shuffleArray(blank.options)
    }))
  };
}
