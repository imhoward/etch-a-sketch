

let mainContainer = document.querySelector(".main-container");
let body = document.querySelector("body");

let btn = document.createElement("button");
btn.classList.add("btn");
btn.innerText = "Reset Board";
body.append(btn);

function createDivGrid(size) {
    for (let i = 0; i < (size*size); i++) {
        let div = document.createElement("div");
        div.classList.add("divs");

        let divSize = 900 / size;
        div.style.width = String(divSize) + "px";
        div.style.height = String(divSize) + "px";
    
        div.addEventListener('mouseover', function(e) {
            div.classList.add('colored-divs');
        });
    
        mainContainer.append(div);
    }
}

let divs = document.querySelector(".divs");

createDivGrid(16);

btn.addEventListener('click', function(e) {
    while (mainContainer.hasChildNodes()) {
        mainContainer.removeChild(mainContainer.firstChild);
    }

    let loopTrue = false;

    while(loopTrue == false) { 
        let size = prompt("How many squares do you want per side?");

        if (size <= 100 && size > 0) {
            loopTrue = true;
            createDivGrid(size);
        } 
    } 
});

