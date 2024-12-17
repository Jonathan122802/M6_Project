var btns;
var index = 0;

function updtBtn(e) {
    var key = e.key;

    switch(key){
        case "w":
            index -=4;
            break;
        case "a":
            index -= 1;
            break;
        case "s":
            index +=4;
            break;
        case "d":
            index += 1;
    }

    if (index < 0){
        index = 0;
    }

    if (index >= btns.length){
        index = btns.length-1;
    }

    btns[index].style.backgroundColor = "#FB6542";

    for (let i=0; i<btns.length; i++){
        if (i == index){
            continue;
        }
        btns[i].style.backgroundColor = "#FFBB00";
    }
}

function loadBtn(){
    index = 0;
    btns = document.getElementsByName("submit");
    document.body.addEventListener("keyup", function (e) {updtBtn(e)});
}
