
// let firstCard = getRandomCard(); -> should be defined under startgame function because we are not even playing the game yet 
// let secondCard = getRandomCard(); -> keep the state of the game/variable in mind 
// let sum = firstCard + secondCard;
// let cardArr = [firstCard, secondCard]; //array that includes the card number being picked 

let cardArr = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
//player object 
let player = {
    name: "Jane Doe",
    chips: 150
};

let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
//another way of grabbing elements from DOM
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");


//rendering player details in player elment 
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardArr = [firstCard, secondCard];
    sum = firstCard + secondCard;
    //game has started now 
    isAlive = true;
    renderGame();
}



//function to set random values to cards
function getRandomCard() {
    let random = Math.floor(Math.random() * 14);
    //if random == 0
    while (random === 0) {
        random = Math.floor(Math.random() * 12);
    }
    //treating ace as 11
    if (random === 1) random = 11;
    //treating J,Q,K as 10
    else if (random > 10) random = 10;

    return random;
}




function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards:";
    for (let i = 0; i < cardArr.length; i++) {
        cardsEl.textContent += " " + cardArr[i];
    }

    //can also be done without forloop 
    // if (cardArr.length === 2) cardsEl.textContent = "Cards: " + cardArr[0] + " " + cardArr[1];
    // else {
    //     let newlyAddedCard = cardArr.length - 1;
    //     cardsEl.textContent += " " + cardArr[newlyAddedCard];
    // }

    if (sum <= 20) {
        message = "Do You Want To Draw A New Card?";
    }
    else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackjack = true;
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}



function newCard() {
    //should not be allowed to run when you refresh the page and when either you have blackjack or you are out of the game 
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cardArr.push(card);
        renderGame();
    }
}
