const cup1 = document.querySelector("#cup1");
const cup2 = document.querySelector("#cup2");
const cup3 = document.querySelector("#cup3");

let currentSelected = null;


function moveTheWater(e){
    const elementSelf = e.target;
    if(currentSelected == null){
        elementSelf.classList.toggle("cup-source-selected");
        currentSelected = elementSelf;
        return;
    }
    
    if(currentSelected.classList.contains("object-1") && !elementSelf.classList.contains("object-2")){
        elementSelf.classList.toggle("object-1");
        currentSelected.classList.toggle("object-1");
    }

    if(currentSelected.classList.contains("object-2") && !elementSelf.classList.contains("object-1")){
        elementSelf.classList.toggle("object-2");
        currentSelected.classList.toggle("object-2");
    }

    currentSelected.classList.toggle("cup-source-selected");
    currentSelected = null;
    return;
}

cup1.onclick = moveTheWater;
cup2.onclick = moveTheWater;
cup3.onclick = moveTheWater;
