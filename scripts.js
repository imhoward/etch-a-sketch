

let mainContainer = document.querySelector(".main-container");
/*
let div = document.createElement("div");
mainContainer.append(div);
*/

for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("divs");
    div.addEventListener('mouseover', function(e) {
        div.classList.add('colored-divs');
    })
    mainContainer.append(div);
}

