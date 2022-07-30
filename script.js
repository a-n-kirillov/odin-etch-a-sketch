const gridSize = 960;

const gridContainer = document.querySelector(".grid-container");
initGrid(gridContainer, 32);


function initGrid(gridContainer, gridSideSize) {
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = '1fr '.repeat(gridSideSize);
    //gridContainer.setAttribute("display", "flex");
    //gridContainer.setAttribute("grid-template-columns", '1fr '.repeat(gridSideSize));

    for (let i = 0; i < gridSideSize ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        gridContainer.appendChild(square);
    }
}