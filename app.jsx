import { useState } from "react";
import questions from "./data/questions";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import Result from "./components/Result";

function App() {
  const [stage, setStage] = useState("start"); // "start" | "quiz" | "result"
  const [category, setCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const quizQuestions =
    category === "All" ? questions : questions.filter((q) => q.category === category);
  const currentQuestion = quizQuestions[currentIndex];
  const isLast = currentIndex === quizQuestions.length - 1;

  const handleStart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setStage("quiz");
  };

  const handleNext = () => {
    if (selected === currentQuestion.answer) setScore(score + 1);

    if (isLast) {
      setStage("result");
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setStage("start");
  };

  return (
    <main className="container">
      {stage === "start" && (
        <StartScreen
          totalQuestions={quizQuestions.length}
          category={category}
          onCategoryChange={setCategory}
          onStart={handleStart}
        />
      )}

      {stage === "quiz" && (
        <QuizScreen
          current={currentIndex + 1}
          total={quizQuestions.length}
          question={currentQuestion.question}
          options={currentQuestion.options}
          selected={selected}
          onSelect={setSelected}
          onNext={handleNext}
        />
      )}

      {stage === "result" && (
        <Result score={score} total={quizQuestions.length} onRestart={handleRestart} />
      )}
    </main>
  );
}

export default App;