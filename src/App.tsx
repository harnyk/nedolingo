import { HashRouter, Routes, Route } from 'react-router-dom';
import QuizList from './components/QuizList';
import QuizPage from './components/QuizPage';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App() {
  return (
    <HashRouter>
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/q/:slug" element={<QuizPage />} />
      </Routes>
    </HashRouter>
  );
}
