const circleTurn = 'O'
const xTurn = 'X'
let currentTurn = ''
const cover = document.querySelector(".cover");

(function gameplay() {
    // Open Form
    const playForm = document.querySelector(".formholder");
    const playBtn = document.querySelector("#play");
    playBtn.addEventListener("click", () => {
        playForm.style["visibility"] = "visible";
    });
    
    // Set up Game
    const startButton = document.querySelector(".continue");
    startButton.addEventListener("click", start)
    function start(event) {
        event.preventDefault();
        let player1Name = document.querySelector(".player1Name").value;
        if (document.querySelector("#xMark").checked) {
            currentTurn = xTurn;
        } else {
            currentTurn = circleTurn;
        };
        playForm.style["visibility"] = "hidden";
        cover.style["visibility"] = "hidden";
        let player1Turn = `${player1Name}'s Turn`;
        const turnAnnouncer = document.createElement("h3");
        turnAnnouncer.innerHTML = player1Turn;
        turnAnnouncer.classList.add("turnAnnouncer")
        const container = document.querySelector(".container");
        container.insertBefore(turnAnnouncer, container.firstChild);
    };

    // Allow one click on each square
    const squareArray = document.querySelectorAll("[data-cell]");
    squareArray.forEach(function(element) {
        element.addEventListener("click", click, {once: true})
    });

    // Change turnAnnouncer and player turn with each click
    function click(e) {
        const square = e.target
        const mark = document.createElement("h2");
        mark.textContent = currentTurn;
        square.appendChild(mark);
        currentTurn === xTurn ? currentTurn = circleTurn : currentTurn = xTurn;
        let player1Name = document.querySelector(".player1Name").value;
        let player2Name = document.querySelector(".player2Name").value;
        let player1Turn = `${player1Name}'s Turn`;
        let player2Turn = `${player2Name}'s Turn`;
        let turnAnnouncer = document.querySelector(".turnAnnouncer");
        if (turnAnnouncer.innerHTML === player1Turn) {
            turnAnnouncer.innerHTML = player2Turn;
        } else {
            turnAnnouncer.innerHTML = player1Turn;
        }
    };
})();