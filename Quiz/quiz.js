const urlParams = new URLSearchParams(window.location.search);
const subject = urlParams.get('topic');
const level = urlParams.get('level');

let currentQuestion = 0;
let score = 0;

const quizTitle = document.getElementById('quiz-title');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result');

const quizBox = document.getElementById('quiz-box');

// This assumes you have quizData defined in question.js
const questions = quizData?.[subject]?.[level];

if (!questions || questions.length === 0) {
  quizTitle.innerText = "No questions found for this subject/level.";
  quizBox.classList.add('hidden');
} else {
  quizTitle.innerText = `Quiz - ${subject.toUpperCase()} (${level.toUpperCase()})`;
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const current = questions[currentQuestion];
  questionContainer.innerText = current.question;
  optionsContainer.innerHTML = '';

  current.options.forEach(option => {
    const btn = document.createElement('button');
    btn.innerText = option;
    btn.classList.remove('correct', 'wrong');
    btn.disabled = false;
    btn.onclick = () => {
      // Disable all buttons to prevent multiple clicks
      Array.from(optionsContainer.children).forEach(b => b.disabled = true);

      if (option === current.answer) {
        score++;
        btn.classList.add('correct');
      } else {
        btn.classList.add('wrong');
        // Highlight the correct answer button
        Array.from(optionsContainer.children).forEach(b => {
          if (b.innerText === current.answer) {
            b.classList.add('correct');
          }
        });
      }

      // Wait 1.5 seconds before loading next question
      setTimeout(() => {
        currentQuestion++;
        loadQuestion();
      }, 1500);
    };
    optionsContainer.appendChild(btn);
  });
}

function showResult() {
  quizBox.classList.add('hidden');
  resultContainer.classList.remove('hidden');
  resultContainer.innerText = `Quiz Finished! Your score: ${score}/${questions.length}`;
}
