function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var diceImage = document.getElementById('diceImage');
    diceImage.src = 'IMG/' + randomNumber + '.png';
}