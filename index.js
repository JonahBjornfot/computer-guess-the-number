let guess = Math.ceil(Math.random() * 99)
let minus = guess - 1;
let plus = guess + 1;

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'
    document.getElementById("message").innerHTML = "Är det" + " " + guess + "?"
}

const hög = document.getElementById('too-high-btn').addEventListener('click', function () {
    document.getElementById("message").innerHTML = "Är det" + " " + minus + "?"
})

const låg = document.getElementById('too-low-btn').addEventListener('click', function () {
    document.getElementById("message").innerHTML = "Är det" + " " + plus + "?"
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    const äntligen = prompt("Hur många försök?")
    console.log(äntligen)
})

document.getElementById("Reload").addEventListener('click', function () {
    location.reload();
})
document.getElementById('start-btn').addEventListener('click', start)

// var button = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };