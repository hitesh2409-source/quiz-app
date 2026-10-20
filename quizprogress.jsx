function QuizProgress({ current, total }) {
  const percent = (current / total) * 100;
  return (
    <div>
      <p className="muted">Question {current} / {total}</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
export default QuizProgress;
