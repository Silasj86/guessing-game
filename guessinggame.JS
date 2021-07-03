
let maximum = parseInt(prompt('ENTER MAXIMUM NUMBER'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number'));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('ENTER YOUR FIRST GUESS'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('TOO HIGH, ENTER A NEW GUESS');
    }
    else {
        guess = prompt('TOO LOW, ENTER A NEW GUESS');
    }

}
if (guess === 'q') {
    prompt('ok, you quit')
} else {
    console.log('YOU GOT IT!!');
    prompt(`YOU GOT IT, I love you and you are amazing!!! And it only took you ${attempts} guesses`)
}