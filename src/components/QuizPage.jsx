import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { quizzesMap } from '../quizzes';
import Quiz from './Quiz';

export default function QuizPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const isDirtyRef = useRef(false);
  const isNavigatingRef = useRef(false);

  const quiz = quizzesMap[slug];

  useEffect(() => {
    // If quiz not found, redirect to list
    if (!quiz) {
      navigate('/', { replace: true });
    }
  }, [quiz, navigate]);

  // Set up beforeunload warning for incomplete quizzes
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirtyRef.current && !isNavigatingRef.current) {
        e.preventDefault();
        // Modern browsers require returnValue to be set (value is ignored, browser shows standard message)
        e.returnValue = 'You have an incomplete quiz. Are you sure you want to leave?';
        return e.returnValue;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleDirtyStateChange = (isDirty) => {
    isDirtyRef.current = isDirty;
  };

  const handleBackToList = () => {
    // Mark that we're navigating intentionally to skip warning
    isNavigatingRef.current = true;
    navigate('/');
  };

  if (!quiz) {
    return null;
  }

  return <Quiz quiz={quiz} onBack={handleBackToList} onDirtyStateChange={handleDirtyStateChange} />;
}
