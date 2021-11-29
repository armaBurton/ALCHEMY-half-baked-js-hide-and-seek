// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const boulderContainer = document.getElementById('boulder-container');
const treeContainer = document.getElementById(`tree-container`);

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
    resetStyles();
    
    totalGuesses++;
    totalEl.textContent = totalGuesses;
    switch (correctSpot){
        case `tree`:
            treeContainer.classList.add(`face`);
            guesses(userGuess, correctSpot);
            break;
        case `boulder`:
            boulderContainer.classList.add(`face`);
            guesses(userGuess, correctSpot);
            break;
        case `shed`:
            shedContainer.classList.add(`face`);
            guesses(userGuess, correctSpot);
            break;
    }
    winsEl.textContent = correctGuesses;
    wrongGuesses = totalGuesses - correctGuesses;
    lossesEl.textContent = wrongGuesses;
}

function resetStyles() {
    // should remove the face class from all containers
    treeContainer.classList.remove(`face`);
    boulderContainer.classList.remove(`face`);
    shedContainer.classList.remove(`face`);
}

function guesses(userGuess, correctSpot){
    if (userGuess === correctSpot){
        correctGuesses++;
    }
}


treeButton.addEventListener('click', () => {
    let userGuess = `tree`;
    // should get a random item to call the 'correct spot'
    let correctSpot = getRandomItem(hidingPlaces);
    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess(userGuess, correctSpot);
});

boulderButton.addEventListener('click', () => {
    let userGuess = `boulder`;
    // should get a random item to call the 'correct spot'
    let correctSpot = getRandomItem(hidingPlaces);
    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess(userGuess, correctSpot);
});

shedButton.addEventListener('click', () => {
    let userGuess = `shed`;
    // should get a random item to call the 'correct spot'
    let correctSpot = getRandomItem(hidingPlaces);
    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess(userGuess, correctSpot);
});