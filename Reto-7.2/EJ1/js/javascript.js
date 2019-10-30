function $(selector){
    return document.querySelectorAll(selector);
}

function mostar(pos){
    var elemento = $("#elemento");
    console.log(elemento);
    console.log(pos);
    if(elemento[pos].style.visibility == "visible"){
        elemento[pos].style.visibility = "hidden";
    }else{
        elemento[pos].style.visibility = "visible";
    }
}


