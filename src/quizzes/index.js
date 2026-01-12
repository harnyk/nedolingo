import yaml from 'js-yaml';

// Import all YAML files
import geographyYaml from './geography.yaml?raw';
import spanishBasicsYaml from './spanish-basics.yaml?raw';
import mathBasicsYaml from './math-basics.yaml?raw';
import artHistoryYaml from './art-history.yaml?raw';

// Parse YAML files
const quizzes = [
  yaml.load(geographyYaml),
  yaml.load(spanishBasicsYaml),
  yaml.load(mathBasicsYaml),
  yaml.load(artHistoryYaml),
];

// Create a map for quick access by slug
export const quizzesMap = quizzes.reduce((acc, quiz) => {
  acc[quiz.slug] = quiz;
  return acc;
}, {});

export default quizzes;
