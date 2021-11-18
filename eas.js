let base = 16;  //base = # of divs across
const container = document.querySelector("#container");

function grid() {  
    const box = document.createElement("div");  //creates a box for divs
    box.classList.add("box");  //gives it a class
    for (let i = 0; i < base; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 0; i < base; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        };
        box.appendChild(row);
    };
    container.appendChild(box);
};

grid();