//MODULOS - Dividir en varios archivos js un mismo problema. El html no tiene acceso al archivo js.
// 2) Traer la clase desde otro archivo js: import - cosa a importar - from - "ruta del archivo (como link archivos de css)"
import Pelicula from "./classPelicula.js";
import { resumenValidaciones } from "./helpers.js";


//Variables globales
let formularioPeliculas = document.getElementById("form-pelicula");
let modalPelicula = new bootstrap.Modal(document.getElementById("boton-sumar-pelicula"));
const botonCrearPelicula = document.getElementById("boton-sumar-pelicula-admi");
let listaPeliculas = [];
let codigo = document.getElementById("inputCodigo");
let titulo = document.getElementById("inputTitulo");
let descripcion = document.getElementById("inputDescripcion");
let imagen = document.getElementById("inputImagen");
let genero = document.getElementById("inputgenero");
let año = document.getElementById("inputAño");
let duracion = document.getElementById("inputDuracion");
let pais = document.getElementById("inputPais");
let director = document.getElementById("inputDirector");
let reparto = document.getElementById("inputReparto");
let alert = document.getElementById("alerta");

// Manejadores de eventos
formularioPeliculas.addEventListener("submit", prepararFormularioPelicula)
botonCrearPelicula.addEventListener("click", desplegarModalPelicula);

// Funciones que necesite
function desplegarModalPelicula() {
    modalPelicula.show();
}

function prepararFormularioPelicula (e) {
    e.preventDefault ();
    console.log("Estoy en el evento submit");
    crearPelicula();
}

function crearPelicula() {
    // 1) validar los datos (validacion html y validacion js)
    const resumen = resumenValidaciones(titulo.value);
    // 2) si los datos son validos, entonces crear pelicula
    if (resumen.length === 0){
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
    
        // 3) guardar los datos en un array (variable global: listaPeliculas)
    
        // 4) guardar el array en el localstorage
    
        // 5) mensaje de error
    
        console.log(peliculaEj);

    } else {
        console.log("Aqui hay errores");
    }

}