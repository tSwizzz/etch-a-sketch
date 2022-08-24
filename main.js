let validNum = false;
let numOfGrids;
do {
numOfGrids = prompt("Select how many grids you want in your sketch pad between 2 and 100!");
if(numOfGrids != null) {
    if(numOfGrids < 2)          alert("Too Low!");
    else if(numOfGrids > 100)   alert("Too High!");
    else                        validNum = true;
    }
} while (!validNum);
if(validNum) 
    populate(numOfGrids);

function populate(size) {  
    let totalGrids = size * size;    
    const container = document.getElementById("container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
    for(let k = 0; k < totalGrids; k++) {
        let grids = document.createElement("div");
        grids.classList.add("grids");
        container.appendChild(grids);
    }
}




  






    