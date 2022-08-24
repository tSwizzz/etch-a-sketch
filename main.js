const gridSize = document.getElementById("btnGridSize");
    gridSize.addEventListener('click', changeGridSize);
const gridColor = document.getElementById("btnGridColor");
    gridColor.addEventListener('click', changeColor);

let numOfGrids;
let validNum = false;
function changeGridSize() {
    do {
        numOfGrids = prompt("Select how many grids you want in your sketch pad between 2 and 100!");
        if(numOfGrids != null) {
            if(numOfGrids < 2)          alert("Too Low!");
            else if(numOfGrids > 100)   alert("Too High!");
            else                        validNum = true;
            }
    } while (!validNum);
    if(validNum)    populate(numOfGrids);
}

function changeColor() {
    //WILL ADD ABILITY TO CHANGE PEN COLOR LATER, NOT REQUIRED FOR PROJECT
}

function oldColor() {

}

function newColor() {
    square.style.backgroundColor = "blue";
}

function populate(size) {  
    let totalGrids = size * size;    
    const container = document.getElementById("container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
    for(let k = 0; k < totalGrids; k++) {
        grids = document.createElement("div");
        grids.classList.add("grids");
        container.appendChild(grids);
    }
}





  






    