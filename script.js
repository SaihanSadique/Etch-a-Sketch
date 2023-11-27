const sizeButtons = document.querySelector(".setting-options");
const sketchPad = document.querySelector(".sketchPad");
sizeButtons.addEventListener("click", event=> {
    let dimension;
    if (event.target.textContent == "small"){
        dimension = 8;
        populatePad(dimension);
    }
    else if(event.target.textContent == "medium"){
        dimension = 4;
        populatePad(dimension);
        }
    else if(event.target.textContent == "large"){
        dimension = 2;
        populatePad(dimension);
    }
    else if(event.target.textContent == "Reset pad"){
        alert("working reset pad");
    }
});
function populatePad(dimension){
    alert(dimension);
}
 