let guessesLeft = 10;
const guessRemaining = document.querySelector('.guessRemaining');
guessRemaining.innerHTML = `${guessesLeft}`;
let answer = parseInt(Math.random()*10 + 1);
const guessSubmit = document.querySelector('.submit');
const prevGuesses = document.querySelector('.prevGuesses');
const message = document.querySelector('.message');
const userInput = document.querySelector('.guess');
const newStart = document.querySelector('.reset');

newStart.addEventListener('click',(game) => {
    game.preventDefault();
    newGame();
})

let playGame = true;

// Self-Solving-1
// if(playGame === true){
//     guessSubmit.addEventListener( 'click', (g) => {
//         g.preventDefault();
//         const userGuess = parseInt(userInput.value);
//         validateGuess(userGuess);
//     })
// }

guessSubmit.addEventListener('click', (g) => {
    g.preventDefault();
    if(playGame === true){
        const userGuess = parseInt(userInput.value);
        validateGuess(userGuess);
    }
    else{
        userInput.value = ``;
    }
})

function validateGuess(guess){
    if(guessesLeft > 0){
        if(isNaN(guess)){
            alert(`Please Enter a Valid Guess`);
        }
        else if(guess <1 || guess>10){
            alert(`Enter a Valid Integer between 1 and 100.`);
        }
        else{
            prevGuesses.innerHTML += `${guess} `;
            checkGuess(guess);
        }
    }
    else{
        playGame = false;
        alert(`Game Over !! It was ${answer}. To Play again click on "New Game" `);
        exitGame();
    }
}

function checkGuess(guess){
    if(guess === answer){
        message.innerHTML = `Congratulations!! You guessed it right. It's ${guess}`;
        message.className  = 'message bg-white text-green-500 font-bold p-4 rounded-xl';
        exitGame();
    }
    else if(guess < answer){
        message.innerHTML = `${guess} is a Too Low Guess`;
        message.className  = 'message bg-white text-red-500 font-bold p-4 rounded-xl';
    }
    else if(guess > answer){
        message.innerHTML = `${guess} is a Too High Guess`;
        message.className  = 'message bg-white text-red-500 font-bold p-4 rounded-xl';
    }

    userInput.value = ``;
    guessesLeft--;
    guessRemaining.innerHTML = `${guessesLeft}`;
}

function exitGame(){
    playGame = false;
    userInput.setAttribute('disabled', ''); // this will disable the input-field
    alert(`Well Played!!. To Play again click on "New Game" `);
}

function newGame(){
    playGame = true;
    guessesLeft = 10;
    userInput.removeAttribute('disabled');
    prevGuesses.innerHTML=``;
    guessRemaining.innerHTML = `${guessesLeft}`;
    message.innerHTML = ``;
    message.className = ``;
    answer = parseInt(Math.random()*10 + 1);
}
