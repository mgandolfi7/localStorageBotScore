//Create a button that adds 1 to a botScore stored in localStorage 
document.querySelector('button').addEventListener('click', plusOne)

if (!localStorage.getItem('botScore')) {
    localStorage.setItem('botScore', 0)
}

function plusOne() {
    let botScoreVal = Number(localStorage.getItem('botScore'))
    botScoreVal += 1
    localStorage.setItem('botScore', botScoreVal)
}

