import QuizProgress from "./QuizProgress";
import Question from "./Question";

function QuizScreen({ current, total, question, options, selected, onSelect, onNext }) {
  const isLast = current === total;

  return (
    <div className="card">
      <QuizProgress current={current} total={total} />
      <Question
        question={question}
        options={options}
        selected={selected}
        onSelect={onSelect}
      />
      <button
        className="btn primary"
        disabled={selected === null}
        onClick={onNext}
      >
        {isLast ? "Finish Quiz" : "Next Question"}
      </button>
    </div>
  );
}
export default QuizScreen;
