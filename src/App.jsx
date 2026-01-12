import { useState } from 'react';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';

export default function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleBackToList = () => {
    setSelectedQuiz(null);
  };

  if (selectedQuiz) {
    return <Quiz quiz={selectedQuiz} onBack={handleBackToList} />;
  }

  return <QuizList onSelectQuiz={handleSelectQuiz} />;
}
