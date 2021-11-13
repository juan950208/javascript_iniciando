let user = prompt('ingrese el usuario', 'user');

if(user == 'Admin'){

    let pass = prompt('ingrese contrasenia', 'password');

    if(pass == 'themaster'){

        alert('BIENVENIDO');
        document.write('Ha ingresado satisfactoriamemte');

    }else if(pass == '' || pass == 'password'){

        alert('CANCELADO');

    }else{

        alert('Contrasenia incorrecta');
        document.write('Acceso denegado');
    }

}else{
    alert('CANCELADO');
}