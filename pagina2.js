function mostrarNombre() {
 const nombre = localStorage.getItem("nombre");
 const ciudad = localStorage.getItem("ciudad");
 const saludo = document.getElementById("saludo");

 if (nombre === null) {
  saludo.textContent = "No hay ningún nombre guardado.";
 } else if (ciudad === null || ciudad === "") {
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
 localStorage.clear();
 mostrarNombre();
}


document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);
document.getElementById("btn-limpiar").addEventListener("click", limpiarTodo);
