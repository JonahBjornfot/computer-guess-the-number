
let minGuess = 0

let maxGuess = 100

let guess

document.getElementById('too-high-btn').addEventListener('click', function () {
    maxGuess = guess
    guess = mittenhög(minGuess, guess)
    setMessage(`is it ${guess}`);
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    minGuess = guess
    guess = mittenlåg(maxGuess, guess)
    setMessage(`is it ${guess}`);
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    prompt("Woho!, Hur många försök tog det?");
})

function setMessage(msg) {
    document.getElementById("message").innerHTML = msg
}

document.getElementById('start-btn').addEventListener('click', start)

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    gissning()

    setMessage(`Is it ${guess}?`);
}
globalThis.setMessage = setMessage;

function gissning(){
    guess = Math.round(Math.random() * 101)
}

function mittenhög(hög, låggiss){
    låggiss = (hög + guess)/2
    console.log(guess)
    return Math.round(låggiss)
}

function mittenlåg(låg, höggiss){
    höggiss = (låg + guess)/2
    console.log(guess)
    return Math.round(höggiss)
}