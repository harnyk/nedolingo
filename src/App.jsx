import { useState } from 'react';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleBackToList = () => {
    setSelectedQuiz(null);
  };

  return (
    <>
      <LanguageSwitcher />
      {selectedQuiz ? (
        <Quiz quiz={selectedQuiz} onBack={handleBackToList} />
      ) : (
        <QuizList onSelectQuiz={handleSelectQuiz} />
      )}
    </>
  );
}
