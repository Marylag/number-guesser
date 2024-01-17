let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {    
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Please enter a number between 0 and 9.');
        return;
    }

    const userDifference = Math.abs(targetNumber - humanGuess);
    const computerDifference = Math.abs(targetNumber - computerGuess);
    
    return userDifference <= computerDifference
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};

