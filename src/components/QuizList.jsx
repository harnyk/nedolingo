import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import quizzes from '../quizzes';
import { useI18n } from '../contexts/I18nContext';

export default function QuizList() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">{t('app.title')}</h1>
          <p className="text-xl text-gray-600">{t('app.tagline')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map((quiz) => (
            <Link
              key={quiz.slug}
              to={`/q/${quiz.slug}`}
              className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 group block"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {quiz.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{quiz.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{quiz.questions.length} {t('quiz_list.questions')}</span>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
