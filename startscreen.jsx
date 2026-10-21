const CATEGORIES = ["All", "React", "JavaScript", "HTML/CSS"];

function StartScreen({ totalQuestions, category, onCategoryChange, onStart }) {
  return (
    <div className="card center">
      <h1> WebDev Quiz</h1>
      <p className="muted">
        Test your web development knowledge with multiple-choice questions.
      </p>

      <div className="categories">
        {CATEGORIES.map((name) => (
          <button
            key={name}
            className={`chip ${category === name ? "selected" : ""}`}
            onClick={() => onCategoryChange(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <p className="badge">{totalQuestions} Questions</p>
      <button className="btn primary" onClick={onStart}>Start Quiz</button>
    </div>
  );
}
export default StartScreen;
