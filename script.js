const sizeButtons = document.querySelector(".setting-options");
sizeButtons.addEventListener("click", event=> {
    if (event.target.textContent == "100x100"){
        alert("working small");
    }
    else if(event.target.textContent == "200x200"){
        alert("working medium");
    }
    else if(event.target.textContent == "400x400"){
        alert("working large");
    }
    else if(event.target.textContent == "Reset pad"){
        alert("working reset pad");
    }
    

});

