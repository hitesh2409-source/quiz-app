function Option({ text, isSelected, onSelect }) {
  return (
    <button
      className={`option ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      {text}
    </button>
  );
}
export default Option;
