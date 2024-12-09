const ARYAN = {
    score: 0,
    button: document.querySelector('#ARYANButton'),
    display: document.querySelector('#ARYANDisplay')
}
const JAI = {
    score: 0,
    button: document.querySelector('#JAIButton'),
    display: document.querySelector('#JAIDisplay')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


ARYAN.button.addEventListener('click', function () {
    updateScores(ARYAN, JAI)
})
JAI.button.addEventListener('click', function () {
    updateScores(JAI, ARYAN)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [ARYAN, JAI]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
