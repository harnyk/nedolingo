import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const quizzesDir = path.join(__dirname, '../src/quizzes');

let hasErrors = false;

const yamlFiles = fs.readdirSync(quizzesDir).filter(f => f.endsWith('.yaml'));

for (const file of yamlFiles) {
  const filePath = path.join(quizzesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  let quiz;
  try {
    quiz = yaml.load(content);
  } catch (e) {
    console.error(`❌ ${file}: Invalid YAML - ${e.message}`);
    hasErrors = true;
    continue;
  }

  if (!quiz.questions || !Array.isArray(quiz.questions)) {
    console.error(`❌ ${file}: Missing or invalid 'questions' array`);
    hasErrors = true;
    continue;
  }

  for (let i = 0; i < quiz.questions.length; i++) {
    const q = quiz.questions[i];
    const questionNum = i + 1;

    if (q.type === 'multiple-choice') {
      if (!q.options || !Array.isArray(q.options)) {
        console.error(`❌ ${file}: Question ${questionNum} is multiple-choice but has no options array`);
        hasErrors = true;
        continue;
      }

      if (!q.correctAnswer) {
        console.error(`❌ ${file}: Question ${questionNum} has no correctAnswer`);
        hasErrors = true;
        continue;
      }

      if (!q.options.includes(q.correctAnswer)) {
        console.error(`❌ ${file}: Question ${questionNum} - correctAnswer "${q.correctAnswer}" is not in options [${q.options.join(', ')}]`);
        console.error(`   Question: ${q.question}`);
        hasErrors = true;
      }
    }
  }
}

if (hasErrors) {
  console.error('\n❌ Quiz validation failed!');
  process.exit(1);
} else {
  console.log('✅ All quizzes validated successfully');
}
