let menu = {
    width: 200,
    height: 300,
    title: "mi menu",
};

function multProp(object){

    for(let key in menu){
        
        if(typeof menu[key] === "number"){
            menu[key] = menu[key] * 2;
        }
    }
}

function showValues(object){

    for(let key in menu){

        document.write(key + ": " + menu[key] + "<br>");
    }
}

showValues(menu);
multProp(menu);
document.write("<br>nuevos valores<br>");
showValues(menu);