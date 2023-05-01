// Guardamos todas nuestras funciones de validacion

function validarCantidadCaracteres(texto, min, max,) {
    if (texto.length >= min && texto.length <= max) {
        console.log("la palabra es valida");
        return true;
    } else {
        console.log("la palabra es incorrecta");
        return false;
    }
}


export function resumenValidaciones(titulo, descripcion, imagen, genero, anio, duracion, pais, director, reparto) {
    let resumen = '';
    if (!validarCantidadCaracteres(titulo, 2, 100)) {
        //si no cumplio la validacion
        resumen += "El titulo debe contener entre 2 y 100 caracteres <br>";
    };
    
    if (!validarCantidadCaracteres(descripcion, 5, 300)) {
        //si no cumplio la validacion
        resumen += "La descripcion debe contener entre 5 y 300 caracteres <br>";
    };

    if (!validarURLImagen(imagen)) {
        //si no cumplio la validacion
        resumen += "La URL debe ser valida y contener una extension (.jpg, .png o .gif) <br>";
    };
    
    if (!validarAño(anio, 1990)) {
        resumen += "El año de estreno debe ser entre 1990 y el proximo año <br>";
    }
    
    if (!validarDuracion(duracion, 10, 241)) {
        resumen += "La duracion debe ser entre 10 min y 241 min"
    }
    
    if (!validarCantidadCaracteres(pais, 4, 100)) {
        //si no cumplio la validacion
        resumen += "El pais debe contener entre 4 y 100 caracteres <br>";
    };
    
    if (!validarCantidadCaracteres(director, 4, 100)) {
        //si no cumplio la validacion
        resumen += "El director debe contener entre 4 y 100 caracteres <br>";
    };
    
    if (!validarCantidadCaracteres(reparto, 4, 300)) {
        //si no cumplio la validacion
        resumen += "El reparto debe contener entre 4 y 300 caracteres <br>";
    };
    
    return resumen;
}

function validarDuracion(tiempo, min, max) {
    if (tiempo >= min && tiempo <= max) {
        console.log("La duracion es valida")
        return true;
    } else {
        console.log("La duracion es invalida")
    }
}

function validarAño(anio, desde) {
    const añoActual = new Date().getFullYear(); // Obtener el año actual <= Math.min(hasta, añoActual)
    
    if (parseInt(anio) >= desde && parseInt(anio) <= añoActual) {
        console.log("El año está dentro del rango válido")// El año está dentro del rango válido
        return true;
    } else {
        // El año no está dentro del rango válido
        console.log("El año no está dentro del rango válido")
    }
}

//https://pics.filmaffinity.com/mavka_the_forest_song-447812217-mmed.jpg

// ^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$   ---> van siempre entre dos /expresion regular/

function validarURLImagen(imagen) {
    const patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
    // .test: metodo que verifica si se cumple con la expresion regular. Devuelve TRUE o FALSE
    if(patron.test(imagen)){
        console.log("La url de la imagen es valida");
        return true;
    } else {
        console.log("La url de la imagen es invalida");
        return false;
    }
}