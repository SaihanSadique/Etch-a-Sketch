const sizeButtons = document.querySelector(".setting-options");
const sketchPad = document.querySelector(".sketchpad");
sizeButtons.addEventListener("click", event=> {
    let population , dimension;
    if (event.target.textContent == "small"){
        dimension = 80;
        population = 300;
        populatePad(dimension, population);
    }
    else if(event.target.textContent == "medium"){
        dimension = 40;
        population = 600;
        populatePad(dimension, population);
        }
    else if(event.target.textContent == "large"){
        dimension = 20;
        population = 1200;
        populatePad(dimension, population);
    }
    else if(event.target.textContent == "Reset pad"){
        const existCheck = sketchPad.querySelector('div');
        if (existCheck) {
            resetPad();
        } 
    }
});

function populatePad(dimension, population){
    for (let i = 0 ; i < population; ++i){
        const sketchPad = document.querySelector(".sketchpad");
        var divChild = document.createElement("div");
        divChild.style.minWidth = `${dimension}px`; // Set width
        divChild.style.minHeight = `${dimension}px`; // Set height
        divChild.style.maxWidth = `${dimension}px`; // Set width
        divChild.style.maxHeight = `${dimension}px`; // Set height
        divChild.id = `id${i}`;
        divChild.className = "temp" ;
        sketchPad.appendChild(divChild);
    }
}

function resetPad() {
    while(document.querySelector(".temp")){

        

    }
}