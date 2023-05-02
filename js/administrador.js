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
let genero = document.getElementById("inputGenero");
let anio = document.getElementById("inputAnio");
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
    const resumen = resumenValidaciones(titulo.value, descripcion.value, imagen.value, genero.value, anio.value, duracion.value, pais.value, director.value, reparto.value);
    // Esta funcion decide si muestra o no el mensaje de error
    mostrarMensajeError(resumen);
    
    // 2) si los datos son validos, entonces crear pelicula

    if (resumen.length === 0){
        const peliculaNueva = new Pelicula(
            undefined, // indicamos que no sabemos que vamos a mandar
            titulo.value,
            descripcion.value,
            imagen.value,
            genero.value,
            anio.value,
            duracion.value,
            pais.value,
            director.value,
            reparto.value
        );

        // 3) guardar los datos en un array (variable global: listaPeliculas)
        listaPeliculas.push(peliculaNueva);
    
        // 4) guardar el array en el localstorage
        guardarEnLocalstorage();
        // 5) mensaje de error
    
        console.log(peliculaNueva);
        // limpiar el formulario
        limpiarFormulario();
    }

}

function mostrarMensajeError (resumen) {
    if(resumen.length > 0) {
        alert.className = "alert alert-danger mt-3";
        alert.innerHTML = resumen;
    } else {
        alert.className = "alert alert-danger mt-3 d-none";
    }
}

function guardarEnLocalstorage(){
    localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas));
}

function limpiarFormulario() {
    formularioPeliculas.reset();
}