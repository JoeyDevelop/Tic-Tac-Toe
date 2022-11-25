let gameArray = ['', '', '', '', '', '', '', '', ''];
let currentTurn = 'X'
let boardLength = document.querySelectorAll('.square');
let cover = document.querySelector('.cover');
let winScreen = document.querySelector('.winScreen');
winScreen.style['visibility'] = 'hidden';
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Set up game after playAgain Button
window.onload = function() {
    let reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        cover.style['visibility'] = 'hidden';
    }
};

const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', () => {
    cover.style['visibility'] = 'hidden';
});

(function gameplay() {
    boardLength.forEach(element => {
        element.addEventListener('click', btnPress, {once: true})
    });

    function btnPress(e) {
        // Add mark to gameboard
        const square = e.target;
        let mark = square.firstChild.nextElementSibling;
        mark.innerHTML = currentTurn;

        // Append mark to gameArray
        switch (true) {
            case square.classList.contains('square1'):
                gameArray.splice(0, 1, currentTurn);
                break;
            case square.classList.contains('square2'):
                gameArray.splice(1, 1, currentTurn);
                break;
            case square.classList.contains('square3'):
                gameArray.splice(2, 1, currentTurn);
                break;
            case square.classList.contains('square4'):
                gameArray.splice(3, 1, currentTurn);
                break;
            case square.classList.contains('square5'):
                gameArray.splice(4, 1, currentTurn);
                break;
            case square.classList.contains('square6'):
                gameArray.splice(5, 1, currentTurn);
                break;
            case square.classList.contains('square7'):
                gameArray.splice(6, 1, currentTurn);
                break;
            case square.classList.contains('square8'):
                gameArray.splice(7, 1, currentTurn);
                break;
            case square.classList.contains('square9'):
                gameArray.splice(8, 1, currentTurn);
            default:
                break;
        }
        checkWin(currentTurn);

        //Change turn on button press
        if (currentTurn === 'X') {
            currentTurn = 'O';
        } else {
            currentTurn = 'X'
        };
    };

    const playAgainBtn = document.querySelector('.playAgain');
    playAgainBtn.addEventListener('click', () => {
        sessionStorage.setItem("reloading", "true");
        window.location.reload();
    });
})();

function checkWin(currentTurn) {
    for (let i = 0; i <= 7; i++) {
        const winCondition = winConditions[i];
        let a = gameArray[winCondition[0]];
        let b = gameArray[winCondition[1]];
        let c = gameArray[winCondition[2]];
        if( a === '' || b === '' || c === '') {
            continue;
        } else if (a === b && b === c) {
            winScreen.style['visibility'] = 'visible';
            let winMsg = document.querySelector('.winMessage');
            winMsg.innerHTML = `${currentTurn}'s Win!`
        };
}};