import yaml from 'js-yaml';

// Import all YAML files
import polishNationalitiesYaml from './polish-nationalities.yaml?raw';
import polishNationalitiesPluralsYaml from './polish-nationalities-plurals.yaml?raw';
import polishPrzyjacieleCasesYaml from './polish-przyjaciele-cases.yaml?raw';
import polishFamilyYaml from './polish-family.yaml?raw';

// Parse YAML files
const quizzes = [
  yaml.load(polishNationalitiesYaml),
  yaml.load(polishNationalitiesPluralsYaml),
  yaml.load(polishPrzyjacieleCasesYaml),
  yaml.load(polishFamilyYaml),
];

// Create a map for quick access by slug
export const quizzesMap = quizzes.reduce((acc, quiz) => {
  acc[quiz.slug] = quiz;
  return acc;
}, {});

export default quizzes;
