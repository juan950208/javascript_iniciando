let salaries = {
    juan: 1300,
    kyle: 2500,
    lucia: 7000,
}

function comprobar(){

    for(let key in salaries){
        return true;
    }
    return false;
}

function suma(object){

    let result = 0;
    if(comprobar() == false){
        document.write("el objeto esta vacio!!!");
    }else{
        document.write("los salarios son<br>" );

        for(let key in salaries){
            
            result += salaries[key];
            document.write(salaries[key] + "<br>");
        }
        
        document.write("la suma de los salarios es: " + result);
    }
}

suma(salaries);