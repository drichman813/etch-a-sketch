function createGrid(size) {
    const container = document.querySelector('.grid-container');
    createColumn(container, size);
    const columns = document.querySelectorAll('.grid-column');
    columns.forEach(column => createRow(column, size));
}

function createColumn(container, size) {
    for (i = 0; i < size; i++) {
        const column = document.createElement('div');
        column.classList.add('grid-column');
        container.append(column);
    }
}

function createRow(column, size) {
    for (i = 0; i < size; i++) {
        const tile = document.createElement('div');
        tile.classList.add('grid-tile');
        column.append(tile);
    }
    const tiles = document.querySelectorAll('.grid-tile');
    tiles.forEach(tile => tile.addEventListener('mouseover', colorTile));
}

function colorTile(e) {
    e.target.classList.add('colored');
    e.stopPropagation();
}

function openCustomizeGridPopup() {
    console.log("Test");
    const size = window.prompt("Enter the size of grid you want (up to 100).", 16);
    resetGrid();
    createGrid(size);
}

function resetGrid() {
    const columns = document.querySelectorAll('.grid-column');
    columns.forEach(column => column.remove());
}

function initialize() {
    createGrid(16);
    const customizebutton = document.querySelector('#customize-grid-button');
    customizebutton.addEventListener('click', () => openCustomizeGridPopup());
}

initialize();