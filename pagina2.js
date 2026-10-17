
function mostrarNombre() {
 const nombre = sessionStorage.getItem("nombre");
 const ciudad = sessionStorage.getItem("ciudad");
 const saludo = document.getElementById("saludo");
 const hayCiudad = ciudad !== null && ciudad !== "";

 if (nombre === null) {
  saludo.textContent = "No hay ningún nombre guardado." +
   (hayCiudad ? " (Ciudad guardada: " + ciudad + ")" : "");
 } else if (!hayCiudad) {
  saludo.textContent = "Hola, " + nombre;
 } else {
  saludo.textContent = "Hola, " + nombre + ", de " + ciudad;
 }
}


function borrar() {
 sessionStorage.removeItem("nombre");
 mostrarNombre();
}

function limpiarTodo() {
 sessionStorage.clear();
 mostrarNombre();
}


document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);
document.getElementById("btn-limpiar").addEventListener("click", limpiarTodo);

