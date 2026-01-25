import yaml from 'js-yaml';
import { parseClozeText } from '../utils/cloze-parser';

// Import all YAML files
import polishNationalitiesYaml from './polish-nationalities.yaml?raw';
import polishNationalitiesPluralsYaml from './polish-nationalities-plurals.yaml?raw';
import polishPrzyjacieleCasesYaml from './polish-przyjaciele-cases.yaml?raw';
import polishFamilyYaml from './polish-family.yaml?raw';
import polishOdczasownikoweRzeczownikiYaml from './polish-odczasownikowe-rzeczowniki.yaml?raw';
import polishZaimkiYaml from './polish-zaimki.yaml?raw';
import exampleClozeYaml from './example-cloze.yaml?raw';

/**
 * Normalizes a question from YAML format to internal format.
 * Handles cloze questions which have a nested structure in YAML.
 */
function normalizeQuestion(rawQuestion) {
  // Check if it's the nested cloze format from YAML
  if (rawQuestion.question && typeof rawQuestion.question === 'object') {
    const { type, text } = rawQuestion.question;
    if (type === 'cloze' && text) {
      return {
        type: 'cloze',
        rawText: text,
        cloze: parseClozeText(text),
        noShuffle: rawQuestion.question.noShuffle
      };
    }
  }
  // Return as-is for regular questions
  return rawQuestion;
}

/**
 * Normalizes all questions in a quiz.
 */
function normalizeQuiz(quiz) {
  return {
    ...quiz,
    questions: quiz.questions.map(normalizeQuestion)
  };
}

// Parse YAML files and normalize
const quizzes = [
  yaml.load(polishNationalitiesYaml),
  yaml.load(polishNationalitiesPluralsYaml),
  yaml.load(polishPrzyjacieleCasesYaml),
  yaml.load(polishFamilyYaml),
  yaml.load(polishOdczasownikoweRzeczownikiYaml),
  yaml.load(polishZaimkiYaml),
  yaml.load(exampleClozeYaml),
].map(normalizeQuiz);

// Create a map for quick access by slug
export const quizzesMap = quizzes.reduce((acc, quiz) => {
  acc[quiz.slug] = quiz;
  return acc;
}, {});

export default quizzes;
