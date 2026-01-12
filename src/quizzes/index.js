import yaml from 'js-yaml';

// Import all YAML files
import polishNationalitiesYaml from './polish-nationalities.yaml?raw';

// Parse YAML files
const quizzes = [
  yaml.load(polishNationalitiesYaml),
];

// Create a map for quick access by slug
export const quizzesMap = quizzes.reduce((acc, quiz) => {
  acc[quiz.slug] = quiz;
  return acc;
}, {});

export default quizzes;
