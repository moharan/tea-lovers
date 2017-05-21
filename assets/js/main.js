function newsletter() {
	//alert("existe");
	// validaciones en contenedores 
    var letras = /^[A-Za-z]*$/; /*/^[a-zA-Z ]*$/;/^[0-9]$/*/
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // datos desde formulario
    var nombre = document.getElementById("nombre").value;
    //console.log(nombre);
    var email = document.getElementById("email").value;
    //console.log(email);
    var direccion = document.getElementById("direccion").value;
    //console.log(direccion);
    var selectorIndex = document.getElementById("selector").selectedIndex;
    var selectorOpts = document.getElementById("selector").options;
    var selectorFinal = selectorOpts[selectorIndex].value;
    //console.log(selectorFinal);

    var res01 = 0;
    var res02 = 0;
    var res03 = 0;
    var res04 = 0;

    if (nombre == null || nombre.length == 0) {
        console.log(nombre + " Esta vacio");
    }  else {
        console.log(nombre + " Valido");
        res01 = 1; 
    }

    if (email == null || email.length == 0) {
        console.log(email + " Esta vacio");
    } else if (!correo.test(email)) {
        console.log(email + " agregar @");
    } else {
        console.log(email + " Valido");
        res02 = 1; 
    }

    if (direccion == null || direccion.length == 0) {
        console.log(direccion + " Esta vacio");
    } else {
        console.log(direccion + " Valido");
        res03 = 1; 
    }

    if (selectorFinal !== "0") {
    	console.log(selectorFinal);
    	res04 = 1; 
    } else {
    	console.log(selectorFinal + " Selecciona un Té");
    }

    if (res01 == 1 && res02 == 1 && res03 == 1 && res04 == 1) {
    	alert("Muchas Gracias por Suscribirse");
    } else {
    	alert("Error, Ingresa tus datos correctamente");
    }
    	console.log(res01);
    	console.log(res02);
    	console.log(res03);
    	console.log(res04);

    // limpia value para seguir completando el formulario
    document.getElementById("nombre").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("email").value = "";
    document.getElementById("selector").value = "0";
}