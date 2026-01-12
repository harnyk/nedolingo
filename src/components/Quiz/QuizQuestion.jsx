export default function QuizQuestion({ question }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        {question}
      </h2>
    </div>
  );
}
