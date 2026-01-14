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
    await page.getByTestId('language-switcher-trigger').click();
    await page.getByTestId('language-button-ru').click();

    // 3. Verify quiz list is loaded
    await expect(page.getByText('Nedolingo')).toBeVisible();

    // 4. Click on polish-przyjaciele-cases quiz
    await page.getByRole('link', { name: /Склонения слова "przyjaciele"/ }).click();

    // 4. Wait for quiz page to load
    await expect(page).toHaveURL(/\/#\/q\/polish-przyjaciele-cases/);
    await expect(page.getByRole('heading', { name: /Склонения слова "przyjaciele"/ })).toBeVisible();

    // 5. Answer all questions from the YAML (respect maxQuestions)
    const totalQuestions = typeof quizData.maxQuestions === 'number'
      ? Math.min(questions.length, Math.max(0, Math.floor(quizData.maxQuestions)))
      : questions.length;
    for (let i = 0; i < totalQuestions; i++) {
      // Wait for question to be visible
      const questionLocator = page.getByTestId('quiz-question-heading');
      await expect(questionLocator).toBeVisible();

      // Verify progress percentage at key points
      if (i === 0) {
        // First question: 0 completed (0%)
        await expect(page.getByTestId('quiz-progress-percentage')).toHaveText('0%');
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
    // Verify score is exactly 3/total
    await expect(page.getByText(`3/${totalQuestions}`)).toBeVisible();

    // Verify incorrect answers section shows totalQuestions - 3 questions
    const incorrectAnswerCards = page.getByTestId('quiz-incorrect-card');
    await expect(incorrectAnswerCards).toHaveCount(totalQuestions - correctAnswersCount);

    // Verify back and retry buttons are present
    await expect(page.getByRole('button', { name: 'Назад к тестам' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Попробовать снова' })).toBeVisible();
  });

  test('should reshuffle questions when retrying a quiz', async ({ page }) => {
    // Load quiz data from YAML
    const quizPath = path.join(process.cwd(), 'src/quizzes/polish-przyjaciele-cases.yaml');
    const quizData = yaml.load(fs.readFileSync(quizPath, 'utf8'));
    const totalQuestions = typeof quizData.maxQuestions === 'number'
      ? Math.min(quizData.questions.length, Math.max(0, Math.floor(quizData.maxQuestions)))
      : quizData.questions.length;

    const collectQuestionOrder = async () => {
      const order = [];
      for (let i = 0; i < totalQuestions; i++) {
        const questionLocator = page.getByTestId('quiz-question-heading');
        await expect(questionLocator).toBeVisible();
        const questionText = await questionLocator.textContent();
        order.push(questionText);

        const optionButtons = page.getByTestId('quiz-option-button');
        await optionButtons.first().click();

        const checkButton = page.getByRole('button', { name: 'Проверить ответ' });
        await expect(checkButton).toBeEnabled();
        await checkButton.click();

        await page.getByTestId('quiz-result-icon').waitFor();

        const isLastQuestion = i === totalQuestions - 1;
        const nextButton = page.getByRole('button', {
          name: isLastQuestion ? 'Посмотреть результаты' : 'Следующий вопрос'
        });
        await nextButton.click();
      }
      return order;
    };

    // 1. Navigate to landing page
    await page.goto('/');

    // 2. Switch to Russian to have consistent locale
    await page.getByTestId('language-switcher-trigger').click();
    await page.getByTestId('language-button-ru').click();

    // 3. Verify quiz list is loaded
    await expect(page.getByText('Nedolingo')).toBeVisible();

    // 4. Click on polish-przyjaciele-cases quiz
    await page.getByRole('link', { name: /Склонения слова "przyjaciele"/ }).click();

    // 5. Complete the quiz once and capture question order
    const firstRunOrder = await collectQuestionOrder();

    // 6. Retry the quiz
    await page.getByRole('button', { name: 'Попробовать снова' }).click();

    // 7. Complete the quiz again and capture question order
    const secondRunOrder = await collectQuestionOrder();

    // Expect order and selection to change after retrying
    expect(secondRunOrder).not.toEqual(firstRunOrder);

    const firstRunSet = new Set(firstRunOrder);
    const secondRunSet = new Set(secondRunOrder);
    let hasDifferentQuestions = false;
    for (const question of firstRunSet) {
      if (!secondRunSet.has(question)) {
        hasDifferentQuestions = true;
        break;
      }
    }
    expect(hasDifferentQuestions).toBe(true);
  });
});
