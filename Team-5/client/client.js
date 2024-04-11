async function loadPage(id) {
    const divIds = ['home', 'test', 'vulnerable'];
    if (id === 'test') {
        document.querySelector(`[data-card="${1}"]`).style.display = 'block';
    }
    divIds.forEach(function(divId) {

        const div = document.getElementById(divId);
    
        if (divId === id) {
        div.style.display = 'block';
        } else {
        div.style.display = 'none';
        }
    });
}

let total_symptoms = 0;

function nextCard(num) {
    let yesInput = document.querySelector(`input[name="q${num}"][value="Yes"]`);
    if (yesInput && yesInput.checked) {
        total_symptoms += 1;
        console.log('yes3', total_symptoms);
    }       
    document.querySelector(`[data-card="${num}"]`).style.display = 'none';
    document.querySelector(`[data-card="${num+1}"]`).style.display = 'block';
}

async function submitQuiz() {
    document.querySelector(`[data-card="${12}"]`).style.display = 'none';
    document.getElementById('retake').style.display = 'flex';
    if (total_symptoms == 0) {
        document.getElementById('low_result').style.display = 'block';
    }
    else {
        document.getElementById('symptoms_number').innerHTML = total_symptoms;
        document.getElementById('high_result').style.display = 'block';}
}

async function retakeQuiz() {
    document.getElementById('low_result').style.display = 'none';
    document.getElementById('high_result').style.display = 'none';
    document.getElementById('retake').style.display = 'none';
    document.querySelector(`[data-card="${1}"]`).style.display = 'block';
    total_symptoms = 0;
}