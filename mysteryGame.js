document.addEventListener('DOMContentLoaded', (event) => {

    let targetNumber = Math.floor(Math.random()*100+1);
    let attempts = 0;

    const form = document.getElementById('gameForm');
    const userChoice = document.getElementById('userChoice');
    const gameMessages = document.getElementById('gameMessages');
    const replayButton = document.getElementById('replayButton');

    replayButton.style.display = 'none';

    form.addEventListener('submit', (event) => {

        event.preventDefault();
        const guess = Number(userChoice.value);23
        attempts++;

        if (isNaN(guess) || guess < 0 || guess > 100) {
            gameMessages.textContent = "Enter a valid number between 0 and 100";
        }else if (guess > targetNumber) {
            gameMessages.textContent = "Target number is smaller";
        }else if (guess < targetNumber) {
            gameMessages.textContent = "Target number is bigger";
        }else {
            gameMessages.textContent = `Yes, it was ${targetNumber}! You found it in ${attempts} attempts!`;
            replayButton.style.display = 'block';
            form.style.display = 'none';
        }
    });

    replayButton.addEventListener('click', function() {

        targetNumber = Math.floor(Math.random()*100+1);
        attempts = 0;
        userChoice.value = "";
        gameMessages.textContent = "";
        replayButton.style.display = "none";
        form.style.display = "block";
    })

});