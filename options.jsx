const LETTERS = ["A", "B", "C", "D"];

function Option({ text, index, isSelected, onSelect }) {
  return (
    <button
      className={`option ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <span className="letter">{LETTERS[index]}</span>
      <span>{text}</span>
    </button>
  );
}
export default Option;
