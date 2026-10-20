import Option from "./Option";

function Question({ question, options, selected, onSelect }) {
  return (
    <div>
      <h2 className="question">{question}</h2>
      <div className="options">
        {options.map((text, index) => (
          <Option
            key={index}
            text={text}
            isSelected={selected === index}
            onSelect={() => onSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}
export default Question;
