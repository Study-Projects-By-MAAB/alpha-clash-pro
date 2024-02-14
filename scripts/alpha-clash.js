// function play() {
//     // hide the home screen 
//     const homeSection = document.getElementById('homeScreen');
//     const playGround = document.getElementById('playGround')
//     homeSection.classList.add('hidden')
//     playGround.classList.remove('hidden')
// }

function continueGame() {
    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet()
    const currentAlphabet = document.getElementById('currentAlphabet')
    currentAlphabet.innerText = alphabet

    setBGColorById(alphabet)
}

function play() {
    hideElementById('homeScreen')
    showElementById('playGround')
    continueGame()
}