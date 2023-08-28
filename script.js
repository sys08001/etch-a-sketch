let gridContainer = document.querySelector('#grid-container');

for (let i = 0; i < 4; i++) {
    let gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    gridContainer.appendChild(gridRow);
    for (let j = 0; j < 4; j++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridRow.appendChild(gridItem);
    }
}