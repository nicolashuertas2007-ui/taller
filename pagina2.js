function mostrarNombre() {
 const nombre = sessionStorage.getItem("nombre"); 
 if (nombre === null) {
 document.getElementById("saludo").textContent = "No hay ningún nombre
guardado.";
 } else {
 document.getElementById("saludo").textContent = "Hola, " + nombre;
 }
}

function borrar() {
 sessionStorage.removeItem("nombre"); 
 mostrarNombre(); 
}

document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar); 

