let gridContainer = document.querySelector('#grid-container');
let button = document.querySelector('button');

// Draw the initial 16x16 grid on page load
drawGrid();

// Prompt the user to enter amount of squares per side when clicking button
// Max amount is capped to 100 for performance reasons
button.addEventListener('click', (e) => {
    let userSize = prompt('Enter an amount of squares (per side)');
    if (userSize >= 100) {
        userSize = 100;
    }
    // Remove the old grid before drawing the new one with a custom size
    gridContainer.innerHTML = '';
    drawGrid(userSize);
})

// Draws a grid of either:
// 1) The default of 16x16
// 2) A user provided value (per side)
function drawGrid(size = 16) {
    for (let i = 0; i < size; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);
        for (let j = 0; j < size; j++) {
            let gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            // Changes the color of a square on mouse hover to random value
            gridItem.addEventListener('mouseover', () => {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                gridItem.style.backgroundColor = `rgb(${r},${g},${b})`;
            });
            gridRow.appendChild(gridItem);
        }
    }
}