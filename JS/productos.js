function verificarEdad() {
  let edad = document.getElementById("edad").value;
  let resultado = document.getElementById("resultado");

  if (edad === "") {
    resultado.textContent = "Por favor, ingresa una edad.";
    resultado.style.color = "gray";
  } else if (edad >= 18) {
    resultado.textContent = "Eres mayor de edad.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Eres menor de edad.";
    resultado.style.color = "red";
  }
}