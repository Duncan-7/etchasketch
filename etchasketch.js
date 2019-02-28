const container = document.querySelector('.container');
const grid = document.querySelector('.grid');

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGrid);

const options = document.querySelector('select');
options.addEventListener('change', setColor);

let boxes = 16;
createGrid(boxes);

function createGrid(sides){
    if(sides > 100){
        resetGrid()
    } else {
        for(i = 0; i < sides*sides; i++){
        singleBox(sides);
        }
    }    
}

function singleBox(X){
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    let dimensions = 600/X - 2;
    newBox.style.height = dimensions + 'px';
    newBox.style.width = dimensions + 'px';
    newBox.addEventListener('mouseenter', () => newBox.style.backgroundColor = setColor());
    grid.appendChild(newBox);
}

function resetGrid(){
    let newSize = prompt("How many squares wide do you want your grid to be? (max 100)");
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
    if(newSize){
        createGrid(newSize);
    } else {
        createGrid(16);
    }    
}

function setColor() {
    var choice = options.value;
    switch(choice) {
        case 'black':
        return 'black';
        case 'red':
        return 'red';
        case 'multicolor':
        return '#' + Math.floor(Math.random() * 16777216).toString(16);
        default:
        return 'black';
    }
}