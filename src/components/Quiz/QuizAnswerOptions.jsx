export default function QuizAnswerOptions({
  exercise,
  selectedOption,
  onSelectOption,
  textInput,
  onTextInputChange,
  onSubmit,
  showResult,
  t
}) {
  if (showResult) {
    return null;
  }

  return (
    <div className="space-y-4 mb-8">
      {exercise.type === 'multiple-choice' ? (
        exercise.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(option)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
              selectedOption === option
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            {option}
          </button>
        ))
      ) : (
        <input
          type="text"
          value={textInput}
          onChange={(e) => onTextInputChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && textInput && onSubmit()}
          placeholder={t('quiz.type_answer')}
          className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
          autoFocus
        />
      )}
    </div>
  );
}
