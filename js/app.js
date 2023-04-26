let btnDark = document.getElementById("btn-dark");
let btnLight = document.getElementById("btn-light");

btnDark.addEventListener("click", () => cambiarTema("dark"));
btnLight.addEventListener("click", () => cambiarTema("light"));

function cambiarTema (color) {
    // traemos la etiqueta html ya que utilizaremos el atributo data-base-theme de bootstrap
    // propiedad de la etiqueta html: setAttribute(atributo,valor)
    document.querySelector("html").setAttribute("data-bs-theme", color);

}