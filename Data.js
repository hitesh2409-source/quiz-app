const questions = [
  // ---------- React ----------
  {
    id: 1,
    category: "React",
    question: "Which hook manages state in React?",
    options: ["useState", "useFetch", "useStyle", "useRender"],
    answer: 0,
  },
  {
    id: 2,
    category: "React",
    question: "How do you pass data from a parent component to a child component?",
    options: ["State", "Props", "Refs", "Hooks"],
    answer: 1,
  },
  {
    id: 3,
    category: "React",
    question: "Which array method is commonly used to render a list in React?",
    options: ["forEach()", "filter()", "map()", "reduce()"],
    answer: 2,
  },
  {
    id: 4,
    category: "React",
    question: "What must a React component name start with?",
    options: ["Lowercase letter", "Number", "Underscore", "Uppercase letter"],
    answer: 3,
  },

  // ---------- JavaScript ----------
  {
    id: 5,
    category: "JavaScript",
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["var", "const", "let", "static"],
    answer: 2,
  },
  {
    id: 6,
    category: "JavaScript",
    question: "Which array method adds an item to the end of an array?",
    options: ["push()", "pop()", "shift()", "slice()"],
    answer: 0,
  },
  {
    id: 7,
    category: "JavaScript",
    question: "What does typeof null return?",
    options: ["null", "undefined", "object", "number"],
    answer: 2,
  },
  {
    id: 8,
    category: "JavaScript",
    question: "What does the === operator compare?",
    options: ["Value only", "Value and type", "Type only", "Memory address"],
    answer: 1,
  },

  // ---------- HTML/CSS ----------
  {
    id: 9,
    category: "HTML/CSS",
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<head>", "<heading>", "<h1>"],
    answer: 3,
  },
  {
    id: 10,
    category: "HTML/CSS",
    question: "Which CSS property changes the text color?",
    options: ["font-color", "color", "text-style", "foreground"],
    answer: 1,
  },
  {
    id: 11,
    category: "HTML/CSS",
    question: "What does 'display: flex' enable in CSS?",
    options: ["Flexbox layout", "Hidden elements", "Animations", "Fixed positioning"],
    answer: 0,
  },
  {
    id: 12,
    category: "HTML/CSS",
    question: "Which CSS rule is used to make a page responsive for different screen sizes?",
    options: ["@media", "@import", "@keyframes", "@font-face"],
    answer: 0,
  },
];

export default questions;
