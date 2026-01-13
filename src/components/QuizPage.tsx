import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { quizzesMap } from '../quizzes';
import Quiz from './Quiz/Quiz';
import type { QuizzesMap } from '../types';

export default function QuizPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const isDirtyRef = useRef(false);
  const isNavigatingRef = useRef(false);

  const quizMap = quizzesMap as QuizzesMap;
  const quiz = slug ? quizMap[slug] : undefined;

  useEffect(() => {
    // If quiz not found, redirect to list
    if (!quiz) {
      navigate('/', { replace: true });
    }
  }, [quiz, navigate]);

  // Set up beforeunload warning for incomplete quizzes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
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

  const handleDirtyStateChange = (isDirty: boolean) => {
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
