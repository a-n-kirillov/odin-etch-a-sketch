const STARTING_GRID_SIDE_SIZE = 32;
const MAX_GRID_SIZE = 64;

const gridContainer = document.querySelector(".grid-container");
resizeGrid(gridContainer, STARTING_GRID_SIDE_SIZE);

const resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", (e) => {
    const userSize = +prompt("Enter desired grid size: ");

    if (!validateUserNumberInput(userSize)) {
        alert("Invalid size has been entered!\nEnter an integer in the range of 1-64");
        return;
    }

    resizeGrid(gridContainer, userSize);
});

function resizeGrid(gridContainer, gridSideSize) {
    gridContainer.textContent = '';
    gridContainer.style.gridTemplateColumns = '1fr '.repeat(gridSideSize);

    for (let i = 0; i < gridSideSize ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        gridContainer.appendChild(square);
    }

    const squareGrids = document.querySelectorAll(".grid-square");
    addHoveringEffect(squareGrids);
}

function addHoveringEffect(squares) {
    squares.forEach((square) => {
        square.addEventListener("mouseover", (e => {
            square.classList.add("colored");
        }))
    })
}

function validateUserNumberInput(input) {
    if (Number.isInteger(input) && input >= 1 && input <= MAX_GRID_SIZE) {
        return true;
    }

    return false;
}