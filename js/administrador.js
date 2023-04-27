//MODULOS - Dividir en varios archivos js un mismo problema. El html no tiene acceso al archivo js.
// 2) Traer la clase desde otro archivo js: import - cosa a importar - from - "ruta del archivo (como link archivos de css)"
import Pelicula from "./classPelicula.js";

//Variables globales
let formularioPeliculas = document.getElementById("form-pelicula");

// Manejadores de eventos
formularioPeliculas.addEventListener("submit", prepararFormularioPelicula)

// Funciones que necesite
function prepararFormularioPelicula (e) {
    e.preventDefault ();
    console.log("Estoy en el evento submit");
    crearPelicula();
}

function crearPelicula() {
    const peliculaEj = new Pelicula(
        "001",
        "El señor de los anillos: La comunidad del anillo",
        "La Comunidad del Anillo es la primera parte de la trilogía El Señor de los Anillos, de J. R. R. Tolkien.",
        "https://es.wikipedia.org/wiki/El_se%C3%B1or_de_los_anillos:_La_comunidad_del_anillo#/media/Archivo:The_Lord_of_the_Rings_-_The_Fellowship_of_the_Ring.jpg",
        "Fantasía",
        2001,
        "2 horas y 58 minutos",
        "Estados Unidos, Nueva Zelanda",
        ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin", "Orlando Bloom", "John Rhys-Davies", "Dominic Monaghan", "Billy Boyd", "Sean Bean"]
    );

    console.log(peliculaEj);
}