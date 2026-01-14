---
name: quiz-import
description: Import quiz content into src/quizzes by adapting files from inbox to match the existing quiz structure. Use when asked to bring new quiz files into the app or normalize inbox content to the canonical quiz format.
---

# Quiz Import

## Overview

Import quiz content by using the existing files in `src/quizzes` as the source of truth for structure and formatting, then adapt files in `inbox` to match and place them into `src/quizzes`.

## Workflow

1. Inspect `src/quizzes` and `src/types/quiz.ts` to understand the canonical structure.
2. Review files in `inbox` that need importing.
3. Transform inbox files to match the `src/quizzes` structure and conventions.
4. Save the adapted files into `src/quizzes`.
