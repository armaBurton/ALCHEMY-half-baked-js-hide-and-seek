// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-face');
const boulderContainer = document.getElementById('boulder-face');
const treeContainer = document.getElementById(`tree-face`);

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');

// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder'
];

let correctGuesses = 0;
let totalGuesses = 0;
let wrongGuesses = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    // should reset the styles
    resetStyles();
    
    // then increment the guesses
    totalGuesses++;
    totalEl.textContent = totalGuesses;
    switch (correctSpot){
        case `tree`:
            treeContainer.style.visibility = `visible`;
            guesses(userGuess, correctSpot);
            break;
        case `boulder`:
            boulderContainer.style.visibility = `visible`;
            guesses(userGuess, correctSpot);
            break;
        case `shed`:
            shedContainer.style.visibility = `visible`;
            guesses(userGuess, correctSpot);
            break;
    }
    winsEl.textContent = correctGuesses;
    wrongGuesses = totalGuesses - correctGuesses;
    lossesEl.textContent = wrongGuesses;
    // then grab the appropriate container element for the correct guess from the DOM

    // then add the face class to that element so that the face shows up

    // then if the user guess is correct, increment the correct guesses

    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}

function resetStyles() {
    // should remove the face class from all containers
    treeContainer.style.visibility = `hidden`;
    boulderContainer.style.visibility = `hidden`;
    shedContainer.style.visibility = `hidden`;
}

function guesses(userGuess, correctSpot){
    if (userGuess === correctSpot){
        correctGuesses++;
    }
}


treeButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    let userGuess = `tree`;
    let correctSpot = getRandomItem(hidingPlaces);
    handleGuess(userGuess, correctSpot);
    // then use that correct spot to 'handle the guess' using the handleGuess function
    // if (place === `tree`){
    //     treeContainer.style.visibility = `visible`;
    //     totalGuesses++;
    //     correctGuesses++;
    // }
});

boulderButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    let userGuess = `boulder`;
    let correctSpot = getRandomItem(hidingPlaces);
    handleGuess(userGuess, correctSpot);
    // then use that correct spot to 'handle the guess' using the handleGuess function
});

shedButton.addEventListener('click', () => {
    let userGuess = `shed`;
    let correctSpot = getRandomItem(hidingPlaces);
    handleGuess(userGuess, correctSpot);
    // should get a random item to call the 'correct spot'
    // then use that correct spot to 'handle the guess' using the handleGuess function
});