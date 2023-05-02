//MODULOS - Dividir en varios archivos js un mismo problema. El html no tiene acceso al archivo js.
// 2) Traer la clase desde otro archivo js: import - cosa a importar - from - "ruta del archivo (como link archivos de css)"
import Pelicula from "./classPelicula.js";
import { resumenValidaciones } from "./helpers.js";


//Variables globales
let formularioPeliculas = document.getElementById("form-pelicula");
let modalPelicula = new bootstrap.Modal(document.getElementById("boton-sumar-pelicula"));
const botonCrearPelicula = document.getElementById("boton-sumar-pelicula-admi");
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

let listaPeliculas = JSON.parse(localStorage.getItem("listaPeliculas")) || [];

// si tengo peliculas almacenadas en el array, las transformo en tipo Pelicula
if (listaPeliculas.length !== 0){
    listaPeliculas = listaPeliculas.map((pelicula)=> new Pelicula(pelicula.codigo, pelicula.titulo, pelicula.descripcion, pelicula.imagen, pelicula.genero, pelicula.anio, pelicula.duracion, pelicula.pais, pelicula.director, pelicula.reparto))
}
console.log(listaPeliculas);

// {...pelicula} = es la forma abreviada de escribir: pelicula.codigo, pelicula.titulo, pelicula.descripcion, pelicula.imagen, pelicula.genero, pelicula.anio, pelicula.duracion, pelicula.pais, pelicula.director, pelicula.reparto

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
        
        console.log(peliculaNueva);
        // limpiar el formulario
        limpiarFormulario();
        // mostrar un mensaje intuitivo
    }
    
}

// mensaje de error
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

function cargaInicial() {
    if(listaPeliculas.length !== 0){
        listaPeliculas.map((pelicula) => crearFila(pelicula))
    }
}

cargaInicial();

function crearFila(pelicula) {
    let tablaPelicula = document.getElementById("tablaPelicula");
    tablaPelicula.innerHTML += `<tr>
    <th scope="row">1</th>
    <td>${pelicula.titulo}</td>
    <td><span class="my-class text-truncate">${pelicula.descripcion}</span></td>
    <td><span class="my-class text-truncate">${pelicula.imagen}</span></td>
    <td>${pelicula.genero}</td>
    <td>
        <button class="btn btn-warning" onclick="editarPelicula('${pelicula.codigo}')">
            <i class="bi bi-pencil-square"></i>
        </button>
        <button class="btn btn-danger" onclick="borrarPelicula('${pelicula.codigo}')">
            <i class="bi bi-x-square"></i>
        </button>
    </td>
</tr>`
}