let randomNumber;
let attemptsLeft;
let score;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 5;
    score = 100;

    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "Attempts left: " + attemptsLeft;
    document.getElementById("score").textContent = "Score: " + score;
    document.getElementById("guessInput").value = "";
    document.getElementById("restartBtn").style.display = "none";
}

function checkGuess() {
    let userGuess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (!userGuess) {
        message.textContent = "⚠ Please enter a number!";
        return;
    }

    if (attemptsLeft <= 0) return;

    attemptsLeft--;
    score -= 20;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You Win!";
        document.getElementById("restartBtn").style.display = "inline-block";
    } else if (userGuess > randomNumber) {
        message.textContent = "📉 Too High!";
    } else {
        message.textContent = "📈 Too Low!";
    }

    document.getElementById("attempts").textContent = "Attempts left: " + attemptsLeft;
    document.getElementById("score").textContent = "Score: " + score;

    if (attemptsLeft === 0 && userGuess !== randomNumber) {
        message.textContent = "💀 Game Over! The number was " + randomNumber;
        document.getElementById("restartBtn").style.display = "inline-block";
    }
}

function restartGame() {
    startGame();
}

startGame();