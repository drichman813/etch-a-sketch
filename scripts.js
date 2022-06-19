function createGrid() {
    const container = document.querySelector('.grid-container');
    createColumn(container);
    const columns = document.querySelectorAll('.grid-column');
    columns.forEach(column => createRow(column));
}

function createColumn(container) {
    for (i = 0; i < 16; i++) {
        const column = document.createElement('div');
        column.classList.add('grid-column');
        container.append(column);
    }
}

function createRow(column) {
    for (i = 0; i < 16; i++) {
        const tile = document.createElement('div');
        tile.classList.add('grid-tile');
        column.append(tile);
    }
}