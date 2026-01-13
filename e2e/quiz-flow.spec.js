import { test, expect } from '@playwright/test';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

test.describe('Quiz Flow', () => {
  test('should complete full quiz journey with correct and incorrect answers', async ({ page }) => {
    // Load quiz data from YAML
    const quizPath = path.join(process.cwd(), 'src/quizzes/polish-przyjaciele-cases.yaml');
    const quizData = yaml.load(fs.readFileSync(quizPath, 'utf8'));
    const questions = quizData.questions;

    // Plan: answer first 3 correctly, next 5 incorrectly
    const correctAnswersCount = 3;
    let answeredCorrectly = 0;

    // 1. Navigate to landing page
    await page.goto('/');

    // 2. Switch to Russian to have consistent locale
    await page.getByTestId('language-button-ru').click();

    // 3. Verify quiz list is loaded
    await expect(page.getByText('Nedolingo')).toBeVisible();

    // 4. Click on polish-przyjaciele-cases quiz
    await page.getByRole('link', { name: /Склонения слова "przyjaciele"/ }).click();

    // 4. Wait for quiz page to load
    await expect(page).toHaveURL(/\/#\/q\/polish-przyjaciele-cases/);
    await expect(page.getByRole('heading', { name: /Склонения слова "przyjaciele"/ })).toBeVisible();

    // 5. Answer all 8 questions
    const totalQuestions = 8;
    for (let i = 0; i < totalQuestions; i++) {
      // Wait for question to be visible
      const questionLocator = page.getByTestId('quiz-question-heading');
      await expect(questionLocator).toBeVisible();

      // Verify progress percentage at key points
      if (i === 0) {
        // First question: 0 completed (0%)
        await expect(page.getByTestId('quiz-progress-percentage')).toHaveText('0%');
      } else if (i === 1) {
        // Second question: 1 completed (12.5% → 13%)
        await expect(page.getByTestId('quiz-progress-percentage')).toHaveText('13%');
      }

      // Get the current question text
      const questionText = await questionLocator.textContent();

      // Find matching question in our data
      const matchingQuestion = questions.find(q => q.question === questionText);

      if (!matchingQuestion) {
        throw new Error(`Could not find question: ${questionText}`);
      }

      const shouldAnswerCorrectly = answeredCorrectly < correctAnswersCount;
      const correctAnswer = matchingQuestion.correctAnswer;

      if (shouldAnswerCorrectly) {
        // Find and click the correct answer (use exact match)
        await page.getByRole('button', { name: correctAnswer, exact: true }).click();
        answeredCorrectly++;
      } else {
        // Find and click an incorrect answer
        const allButtons = await page.getByTestId('quiz-option-button').all();
        for (const button of allButtons) {
          const text = await button.textContent();
          if (text !== correctAnswer) {
            await button.click();
            break;
          }
        }
      }

      // Click "Check Answer" button
      const checkButton = page.getByRole('button', { name: 'Проверить ответ' });
      await expect(checkButton).toBeEnabled();
      await checkButton.click();

      // Wait for result to display
      await page.getByTestId('quiz-result-icon').waitFor();

      // Verify progress is 100% after the last answer is submitted
      if (i === totalQuestions - 1) {
        await expect(page.getByTestId('quiz-progress-percentage')).toHaveText('100%');
      }

      // Click Next/Results button
      const isLastQuestion = i === totalQuestions - 1;
      const nextButton = page.getByRole('button', {
        name: isLastQuestion ? 'Посмотреть результаты' : 'Следующий вопрос'
      });
      await nextButton.click();
    }

    // 6. Verify results summary page
    // Verify score is exactly 3/8
    await expect(page.getByText('3/8')).toBeVisible();

    // Verify incorrect answers section shows 5 questions
    const incorrectAnswerCards = page.getByTestId('quiz-incorrect-card');
    await expect(incorrectAnswerCards).toHaveCount(5);

    // Verify back and retry buttons are present
    await expect(page.getByRole('button', { name: 'Назад к тестам' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Попробовать снова' })).toBeVisible();
  });
});
