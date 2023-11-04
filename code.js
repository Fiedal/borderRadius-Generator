function onGraterOrLesser(value) {
    if(value<0){
        return 1;
    }
    else if(value>100){
        return 2;
    }
    else if(value == ""){
        return 3;
    }
    else {
        return 0;
    }
}

let value;
const box = document.getElementById("box")

document.getElementById("copy").onclick = function() {
    let copyText = document.getElementById("preview");
    const range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    try {
        document.execCommand("copy");
        alert("Text copied!");
    } catch (err) {
        console.error("Unable to copy test: ", err);
    }

    window.getSelection().removeAllRanges();
}

document.getElementById("topRight").onchange = function() {

    value = document.getElementById("topRight").value;

    let test = onGraterOrLesser(value);

    if(test == 1 || test == 3){
        value = 0;
    }
    else if(test == 2){
        value = 100; 
    }

    value = parseInt(value, 10);
    document.getElementById("topRight").value = value;
    document.getElementById("phTR").innerHTML = `${value}px`;
    box.style.borderTopRightRadius = `${value}px`;

}
document.getElementById("topLeft").onchange = function() {

    value = document.getElementById("topLeft").value;
    let test = onGraterOrLesser(value);

    if(test == 1 || test == 3){
        value = 0;
    }
    else if(test == 2){
        value = 100;
    }

    value = parseInt(value, 10);
    document.getElementById("topLeft").value = value;
    document.getElementById("phTL").innerHTML = `${value}px`;
    box.style.borderTopLeftRadius = `${value}px`;

}
document.getElementById("botRight").onchange = function() {

    value = document.getElementById("botRight").value;
    let test = onGraterOrLesser(value);

    if(test == 1 || test == 3){
        value = 0;
    }
    else if(test == 2){
        value = 100;
    }

    value = parseInt(value, 10);
    document.getElementById("botRight").value = value;
    document.getElementById("phBR").innerHTML = `${value}px`;
    box.style.borderBottomRightRadius = `${value}px`;
    
}
document.getElementById("botLeft").onchange = function() {

    value = document.getElementById("botLeft").value;
    let test = onGraterOrLesser(value);

    if(test == 1 || test == 3){
        value = 0;
    }
    else if(test == 2){
        value = 100;
    }

    value = parseInt(value, 10);
    document.getElementById("botLeft").value = value;
    document.getElementById("botLeft").value = value;
    document.getElementById("phBL").innerHTML = `${value}px`;
    box.style.borderBottomLeftRadius = `${value}px`;
    
}

document.getElementById("topRight").oninput = function() {
    const inputValue = event.target.value;

    const numericValue = inputValue.replace(/[^0-9]/g, '').slice(0,3);
    event.target.value = numericValue;
}
document.getElementById("topLeft").oninput = function() {
    const inputValue = event.target.value;

    const numericValue = inputValue.slice(0,3);
    event.target.value = numericValue;
}
document.getElementById("botRight").oninput = function() {
    const inputValue = event.target.value;

    const numericValue = inputValue.slice(0,3);
    event.target.value = numericValue;
}
document.getElementById("botLeft").oninput = function() {
    const inputValue = event.target.value;

    const numericValue = inputValue.slice(0,3);
    event.target.value = numericValue;
}