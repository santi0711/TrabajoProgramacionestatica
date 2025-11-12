function entrar() {
  // Efecto de desvanecimiento
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "boceto.html"; // Redirige al boceto
  }, 1000);
}
