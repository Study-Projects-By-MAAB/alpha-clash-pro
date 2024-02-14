function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function setBGColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-[gold]')
}

function removeBGColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-[gold]')
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText
    const value = parseInt(elementValueText)
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}

function getARandomAlphabet() {
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // get a random index between 0-25
    const randomNumber = Math.random() * 25
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index]
    return alphabet
}