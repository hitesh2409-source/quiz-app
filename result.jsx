function getMessage(percent) {
  if (percent === 100) return "🏆 Perfect score! Outstanding!";
  if (percent >= 70) return "🎉 Great job! You know your stuff.";
  if (percent >= 40) return "👍 Not bad! A little more practice will help.";
  return "📚 Keep learning, you'll get there!";
}

function Result({ score, total, onRestart }) {
  const incorrect = total - score;
  return (
    <div className="card center">
      <h1>Quiz Complete</h1>
      <p className="score">{score} / {total}</p>
      <p className="muted">✅ Correct: {score} &nbsp;|&nbsp; ❌ Incorrect: {incorrect}</p>
      <p className="message">{getMessage((score / total) * 100)}</p>
      <button className="btn primary" onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}
export default Result;
