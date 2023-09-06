let gridContainer = document.querySelector('#grid-container');
let button = document.querySelector('button');

// Draw the initial 16x16 grid on page load
drawGrid();

// Prompt the user to enter amount of squares per side when clicking button
// Max amount is capped to 100 for performance reasons
button.addEventListener('click', (e) => {
    let userSize = prompt('Enter an amount of squares (per side) up to 100');
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
            gridItem.style.backgroundColor = "rgba(255,255,255,0)";
            // Changes the color of a square on mouse hover to random value
            gridItem.addEventListener('mouseover', () => {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                // Each mouseover should add 10% additional alpha value to
                // the randomized color up to a max of 1.0
                let a = getAlpha(gridItem.style.backgroundColor) + 0.1;
                if (a > 1.0) a = 1.0;
                gridItem.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
            });
            gridRow.appendChild(gridItem);
        }
    }
}

// Returns the current alpha value stored in the background-color property of 
// an individual grid item.
function getAlpha(colorString) {
    // We need to extract the correct alpha value depending on whether the
    // current background-color property is stored in an rgb() or rgba() format.
    // If it is stored as an rgb(), we can assume the alpha value has reached
    // a value of 1.0
    let formatArray = colorString.split('(');
    if (formatArray[0] === 'rgb') {
        return 1.0
    }
    // Format the rgba() string and extract the stored alpha value
    else {
        let rgbaArray = colorString.split(",");
        let alphaValRawStr = rgbaArray[rgbaArray.length - 1];
        let alphaValRawArr = alphaValRawStr.split("");
        alphaValRawArr.pop();
        let alphaValCurr = parseFloat(alphaValRawArr.join(""));
        return alphaValCurr
    }
}