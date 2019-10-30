function $(selector){
    return document.querySelectorAll(selector);
}

function abrir(pos){
    var menu = $("#menu");
    if(menu[pos].style.display == "block"){
        menu[pos].style.display = "none";
    }else{
        menu[pos].style.display = "block";
    }
}

