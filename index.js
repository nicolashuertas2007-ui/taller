function guardar() {
 const nombre = document.getElementById("nombre").value.trim();
 const ciudad = document.getElementById("ciudad").value.trim();
 
 if (nombre === "") {
  document.getElementById("mensaje").textContent = "Por favor escribe tu nombre.";
  return;
 }

 sessionStorage.setItem("nombre", nombre);  
 sessionStorage.setItem("ciudad", ciudad);   
 window.location.href = "pagina2.html";      
}

document.getElementById("btn-guardar").addEventListener("click", guardar);
