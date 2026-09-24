

const formulario = document.querySelector("form");
const nombre = document.getElementById("nombre");
const errorNombre = document.getElementById("error-nombre");
const email = document.getElementById("email");
const errorCorreo = document.getElementById("error-correo");
const mensaje = document.getElementById("mensaje");
const errorMensaje = document.getElementById("error-mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(valor.trim());

    const correo = email.value.trim();
    const dominiosPermitidos = [ "@hotmail.com", "@gmail.com"];

    if (!correo.includes("@")) {
        errorCorreo.textContent = "Ingrese un correo válido";
    if (!correo === "") {
        errorCorreo.textContent = "Ingrese un correo válido";
    }
    if (!dominioPermitido) {
    establecerError(correo, errorCorreo, "Solo se permiten correos @hotmail.com o @gmail.com.");
    return false;
    }else {
        errorCorreo.textContent = "";
        alert("Formulario enviado correctamente");
    }
}});

function validarNombre() {
  const valor = nombre.value.trim();
  if (valor === "") {
    establecerError(nombre, errorNombre, "El nombre es obligatorio.");
    return false;
  }
  establecerError(nombre, errorNombre, "");
  return true;
}
function validarMensaje() {
  const valor = mensaje.value.trim();
  if (valor === "") {
    establecerError(mensaje, errorMensaje, "El mensaje es obligatorio.");
    return false;
  }
  establecerError(mensaje, errorMensaje, "");
  return true;
}


[nombre, correo, mensaje].forEach((campo) => {
  campo.addEventListener("input", () => {
    if (campo === nombre) validarNombre();
    if (campo === correo) validarCorreo();
    if (campo === mensaje) validarMensaje();
  });
});