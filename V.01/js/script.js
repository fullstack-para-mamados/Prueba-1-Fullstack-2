function actualizarCarritoInicio() {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = Number(localStorage.getItem("gotyshop-carrito")) || 0;
  }
}
