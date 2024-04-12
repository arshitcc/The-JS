let guessRemaining = 10;
const guessRemainingNumber = document.querySelector('.guessRemaining');
// console.log(guessRemainingNumber);

guessRemainingNumber.innerHTML = `${guessRemaining}`;

const guessSubmit = document.querySelector('.submit');
// console.log(guessSubmit);

const prevGuess = document.querySelector('.prevGuesses');
prevGuess.innerHTML = `X`;
const info = document.querySelector('.message');

guessSubmit.addEventListener('click', (guess) => {

    guess.preventDefault();
    const guessNumber = parseInt(document.querySelector('.guess').value);

    if(guessRemaining > 0 && guessNumber > 1 && guessNumber < 10){
        
        let num = parseInt(Math.random()*10 + 1);
        
        if(guessNumber === num){
            info.innerHTML = `Congratulations!! You are a great GUESSER.`;
            info.className  += ' bg-white text-green-500 font-bold p-4 rounded-xl';
        }
        else{
            info.innerHTML = ``;
            info.className = ``;
        }

        prevGuess.innerHTML = `${guessNumber}`;

        guessRemaining--;
        guessRemainingNumber.innerHTML = `${guessRemaining}`;

        console.log(info);
    }
    else if (guessNumber<=1 || guessNumber>=10){
        info.innerHTML = `Enter a Valid Number from the Range !!`;
        info.className  = 'bg-white text-red-500 font-bold p-4 rounded-xl';
    }
    else if(guessRemaining === 0){
        guessRemaining = 10;
        guessRemainingNumber.innerHTML = `${guessRemaining}`;
        prevGuess.innerHTML = `X`;
    }
})

