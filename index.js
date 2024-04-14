let firstCard = 11;
let secondCard = 5;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

function startGame() {
    if (sum <= 20) {
        message = "Do You Want To Draw A New Card? 🙂 ";
    }
    else if (sum === 21) {
        message = "Wooho! You've got Blackjack! 🎉";
        hasBlackjack = true;
    }
    else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }

    console.log(message);
}
