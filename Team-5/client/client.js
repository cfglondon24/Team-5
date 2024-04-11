let currentCard = 1;

async function nextCard(cardNumber) {
  const current = document.querySelector(`.card[data-card="${cardNumber}"]`);
  const next = document.querySelector(`.card[data-card="${cardNumber + 1}"]`);

  if (current) {
    current.classList.remove('active');
  }
  if (next) {
    next.classList.add('active');
  }
  currentCard++;
}

async function submitQuiz() {
    alert('fr')
  const answers = {};
  for (let i = 1; i <= currentCard; i++) {
    const checkboxes = document.querySelectorAll(`.card[data-card="${i}"] input[type="checkbox"]:checked`);
    answers[`q${i}`] = Array.from(checkboxes).map(checkbox => checkbox.value);
  }
  console.log(answers);
  alert('Quiz submitted! Check the console for answers.');
}

async function loadPage(id) {
    const divIds = ['home', 'test', 'vulnerable'];
    
    divIds.forEach(function(divId) {

        const div = document.getElementById(divId);
    
        if (divId === id) {
        div.style.display = 'block';
        } else {
        div.style.display = 'none';
        }
    });
    }