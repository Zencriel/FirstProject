const StartScreen = document.getElementById("Start-Screen");
const QuizScreen = document.getElementById("Quiz-Screen");
const ResultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-button");
const QuestionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const CurrentQuestionSpan = document.getElementById("current-question");
const TotalQuestionsSpan = document.getElementById("total-questions");
const ScoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const MaxScoreSpan = document.getElementById("total-questions");
const ResultMessage = document.getElementById("result-message");
const RestartButton = document.getElementById("Restart-Quiz");
const ProgressBar = document.getElementById("progress");

const quizQuestions = [
    {
    question: "Which river is known as the longest in the world?",
    answers: [
        { text: "River Nile", correct: true },
        { text: "Yangtze River", correct: false },
        { text: "Amazon River", correct: false },
        { text: "Ganges River", correct: false },
    ],
    },
    {
    question: "Which planet is known as the Red Planet?",
    answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
    ],
    },
    {
    question: "What is the hardest natural substance on Earth?",
    answers: [
        { text: "Iron", correct: false },
        { text: "Sapphire", correct: false },
        { text: "Emerald", correct: false },
        { text: "Diamond", correct: true },
    ],
    },
    {
    question: "Who wrote Romeo and Juliet?",
    answers: [
        { text: "Leonardo Da Vinci", correct: false },
        { text: "Vincent Van Gogh", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Sherlock Holmes", correct: false },
    ],
    },
    {
    question: "What is the name of the program that aims to return humans to the Moon?",
    answers: [
        { text: "Apollo", correct: false },
        { text: "Lunar", correct: false },
        { text: "Artemis", correct: true },
        { text: "Icarus", correct: false },
    ],
},
];