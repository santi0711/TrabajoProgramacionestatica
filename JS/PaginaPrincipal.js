
document.addEventListener("DOMContentLoaded", function() {
  
  const botonesComprar = document.querySelectorAll(".comprar");

  botonesComprar.forEach(boton => {
    boton.addEventListener("click", function() {
      const mensajeExistente = this.parentElement.parentElement.querySelector(".mensaje-eleccion");
      if (mensajeExistente) return;


      const mensaje = document.createElement("h4");
      mensaje.textContent = "¡Excelente elección! ";
      mensaje.classList.add("mensaje-eleccion");


      this.parentElement.parentElement.appendChild(mensaje);
    });
  });
});
