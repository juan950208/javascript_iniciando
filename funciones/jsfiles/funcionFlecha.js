/*function ask(question, yes, no){
    if( confirm(question) ) yes();
    else no();
}

ask(
    "confirma?",
    function(){ document.write("siii"); },
    function(){ document.write("noooo"); }
);*/

document.write("<br> Aqui vamos a reestructurar una funcion con una funcion flecha");
document.write('<br> resultado con la funcion flecha: <br>');

let askFlecha = (question, yes, no) => (confirm (question) ) ? yes() : no();

askFlecha(
    "confirma?",
    () => document.write('siiiii'),
    () => document.write('nooooo')
);