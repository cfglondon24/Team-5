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

async function nextCard(num) {
    document.querySelector(`[data-card="${num}"]`).style.display = 'none';
    document.querySelector(`[data-card="${num+1}"]`).style.display = 'block';
}