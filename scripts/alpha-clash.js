// function play() {
//     // hide the home screen 
//     const homeSection = document.getElementById('homeScreen');
//     const playGround = document.getElementById('playGround')
//     homeSection.classList.add('hidden')
//     playGround.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escape') {
        gameOver()
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('currentAlphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase()
    // console.log(expectedAlphabet, playerPressed);

    if (playerPressed === expectedAlphabet) {
        console.log('you got one point');

        const currentScore = getTextElementValueById('currentScore')
        const updateScore = currentScore + 1
        setTextElementValueById('currentScore', updateScore)
        setTextElementValueById('gameScore', updateScore)
        // ---------------------------------------------------------
        // const currentScoreElement = document.getElementById('currentScore');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)


        // const newScore = currentScore + 1
        // currentScoreElement.innerText = newScore

        removeBGColorById(expectedAlphabet)
        continueGame()
    }
    else {
        console.log('you lose');

        const currentLife = getTextElementValueById('currentLife')
        const updateLife = currentLife - 1
        setTextElementValueById('currentLife', updateLife)
        // const currentLifeElement = document.getElementById('currentLife')
        // const currentLifeText = currentLifeElement.innerText
        // const currentLife = parseInt(currentLifeText)

        // const newLife = currentLife - 1
        // currentLifeElement.innerText = newLife
        if (updateLife === 0) {
            gameOver()
            removeBGColorById(expectedAlphabet)
        }
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet()
    // console.log('your random alphabet', alphabet);

    const currentAlphabet = document.getElementById('currentAlphabet')
    currentAlphabet.innerText = alphabet

    setBGColorById(alphabet)
}

function play() {
    hideElementById('homeScreen')
    hideElementById('finalScore')
    showElementById('playGround')

    setTextElementValueById('currentLife', 5)
    setTextElementValueById('currentScore', 0)

    continueGame()
}

function gameOver() {
    hideElementById('playGround')
    showElementById('finalScore')

}