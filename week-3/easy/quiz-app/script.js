import { data as quizData } from './data.js'; // Ensure data.js is in the same directory

let currentQuestionIndex = 0;
const userAnswers = [];

const quizContainer = document.getElementById('quiz');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <ul class="options">
          <li><label><input type="radio" name="answer" value="a" ${userAnswers[currentQuestionIndex] === "a" ? "checked" : ""} /> ${question.a}</label></li>
          <li><label><input type="radio" name="answer" value="b" ${userAnswers[currentQuestionIndex] === "b" ? "checked" : ""} /> ${question.b}</label></li>
          <li><label><input type="radio" name="answer" value="c" ${userAnswers[currentQuestionIndex] === "c" ? "checked" : ""} /> ${question.c}</label></li>
          <li><label><input type="radio" name="answer" value="d" ${userAnswers[currentQuestionIndex] === "d" ? "checked" : ""} /> ${question.d}</label></li>
        </ul>
      `;
}

function updateNavigation() {
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.style.display = currentQuestionIndex === quizData.length - 1 ? 'none' : 'inline-block';
    submitButton.style.display = currentQuestionIndex === quizData.length - 1 ? 'inline-block' : 'none';
}

function showResult() {
    const correctAnswers = quizData.reduce((score, question, index) => {
        return score + (userAnswers[index] === question.correct ? 1 : 0);
    }, 0);
    resultContainer.textContent = `You scored ${correctAnswers} out of ${quizData.length}`;
    resultContainer.style.display = 'block';
    quizContainer.style.display = 'none';
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
}

document.addEventListener('click', (event) => {
    if (event.target.matches('input[name="answer"]')) {
        userAnswers[currentQuestionIndex] = event.target.value;
    }
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        updateNavigation();
    }
});
 
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        updateNavigation();
    }
});

submitButton.addEventListener('click', showResult);

// Initialize the quiz
loadQuestion();
updateNavigation();