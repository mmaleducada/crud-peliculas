//cuando cargue la pagina, lo primero que quiero es que lea el local storage para ver que tema quiere el usuario. Si no hay nada, poner el tema por defecto
//JSON.parse realiza el cambio de un elemento en formato JSON y lo vuelve a lo que era anteriormente
let temaConfigurado = JSON.parse(localStorage.getItem("colorTema")) || "light";
cambiarTema(temaConfigurado);


let btnDark = document.getElementById("btn-dark");
let btnLight = document.getElementById("btn-light");

btnDark.addEventListener("click", () => cambiarTema("dark"));
btnLight.addEventListener("click", () => cambiarTema("light"));

function cambiarTema (color) {
    // traemos la etiqueta html ya que utilizaremos el atributo data-base-theme de bootstrap para cambiar el color del tema de la pagina
    // propiedad de la etiqueta html: setAttribute(atributo,valor)
    document.querySelector("html").setAttribute("data-bs-theme", color);
    // guardamos el contenido de la variable color en el localstorage
    // setItem guarda en el localstorage - lleva dos parámetros: key=palabra que nos recuerda que guardamos - valor que guardamos
    localStorage.setItem("colorTema", JSON.stringify(color))

}