// Variables du jeu
let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Sélection des éléments du DOM
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartButton = document.getElementById("restart-button");

// Fonction pour gérer la logique de devinette
function guessNumber() {
    const userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Veuillez entrer un nombre entre 1 et 100.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess > numberToGuess) {
        message.textContent = "Trop haut ! Essayez un nombre plus bas.";
        message.style.color = "#ff6347"; // Rouge clair
    } else if (userGuess < numberToGuess) {
        message.textContent = "Trop bas ! Essayez un nombre plus haut.";
        message.style.color = "#ffa07a"; // Saumon
    } else {
        message.textContent = `Bravo ! Vous avez trouvé en ${attempts} essais.`;
        message.style.color = "#28a745"; // Vert
        guessButton.disabled = true;
        restartButton.classList.remove("hidden");
    }

    guessInput.value = "";
    guessInput.focus();
}

// Fonction pour redémarrer le jeu
function restartGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    message.textContent = "Faites votre premier essai !";
    message.style.color = "#333";
    guessInput.value = "";
    guessButton.disabled = false;
    restartButton.classList.add("hidden");
}

// Ajout des événements
guessButton.addEventListener("click", guessNumber);
restartButton.addEventListener("click", restartGame);

// Permet d'utiliser la touche "Entrée" pour deviner
guessInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        guessNumber();
    }
});
