function createPlayer(name) {
    return {
        name,
    }
};

const player1 = createPlayer('Joey');

(function gameboard() {
    // Temporary function to make div squares functioning
    const squareArray = document.querySelectorAll(".square");
    squareArray.forEach(function(element) {
    element.addEventListener("click", () => {
        alert("hey");
        });
    });
})();