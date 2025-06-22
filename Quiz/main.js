let selectedSubject = null;

function selectSubject(subject) {
  selectedSubject = subject;
  document.getElementById('level-section').classList.remove('hidden');
}

function selectLevel(level) {
  if (!selectedSubject) {
    alert("Please select a subject first!");
    return;
  }

  // Save to localStorage
  localStorage.setItem('subject', selectedSubject);
  localStorage.setItem('level', level);

  // Redirect to quiz page
  window.location.href = 'quiz.html';
}
document.getElementById('easy-btn').addEventListener('click', () => {
  localStorage.setItem('level', 'easy');
  startQuiz();
});
document.getElementById('medium-btn').addEventListener('click', () => {
  localStorage.setItem('level', 'medium');
  startQuiz();
});
document.getElementById('hard-btn').addEventListener('click', () => {
  localStorage.setItem('level', 'hard');
  startQuiz();
});

// Maybe call startQuiz() on page load here too
startQuiz();
