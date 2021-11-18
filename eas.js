let base = 16;  //base = # of divs across
const container = document.querySelector("#container");

function grid() {  
    const box = document.createElement("div");  //creates a box for divs
    box.classList.add("box");  //gives it a class
        for (let i = 0; i < base; i++) {  //for loop to generate rows
            const row = document.createElement("div");
            row.classList.add("row");
                for (let i = 0; i < base; i++) {  //for loop to generate squares
                    const square = document.createElement("div");
                    square.classList.add("square");
                    row.appendChild(square);  //attach squares to rows
                };
            box.appendChild(row);  //attach rows to box
        };
    container.appendChild(box);  //attach box to container
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.classList.add("active");
    });
});

};

grid();

const box = document.querySelector("box");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    base = prompt("How many squares do you want in each row and column?");
    if (base > 100) {
        alert("Please try a number less than 100!");
        return;
    }
    container.removeChild(container.lastChild);
    grid();
});