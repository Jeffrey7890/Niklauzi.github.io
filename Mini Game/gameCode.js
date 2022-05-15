'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'start guessing yay.... ';


const button = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';

let score =20 
let highScore = 0;

console.log(secretNumber);

button.addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';

        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Yay correct!';
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is too high
    } else if (guess >  secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'dude you lost the game !';
            document.querySelector('.score').textContent = 0;
        }
        // when guess is too low
    } else if (guess <  secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'dude you lost the game !';
            document.querySelector('.score').textContent = 0;
        }
    }
})



const againButton = document.querySelector('.again');
againButton.addEventListener('click', function(){
 
    score =20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent ='start guessing yay..';
    
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value = ' ';

})