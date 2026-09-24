const listaProductos = [
  { id: 1, nombre: "Monster Hunter Wilds", precio: 43000, imagen: "img/images.jpg" },
  { id: 2, nombre: "Fire Emblem Fortune Weaves", precio: 43000, imagen: "img/femblem.jpg" },
  { id: 3, nombre: "Arknights: Endfield", precio: 3000, imagen: "img/endfield.jpg" },
  { id: 4, nombre: "Clair Obscur: Expedition 33", precio: 33000, imagen: "img/33.jpg" },
 
];

let carrito = Number(localStorage.getItem("gotyshop-carrito")) || 0;

function actualizarContador() {
  const contador = document.getElementById("contador-carrito");
  const footer = document.getElementById("contador-carrito-footer");
  if (contador) contador.textContent = carrito;
  if (footer) footer.textContent = carrito;
}

function agregarAlCarrito() {
  carrito++;
  localStorage.setItem("gotyshop-carrito", carrito);
  actualizarContador();
  alert("Producto agregado al carrito.");
}

function cargarProductos() {
  const contenedor = document.getElementById("contenedor-productos");
  if (!contenedor) return;

  listaProductos.forEach((producto) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("producto");

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.classList.add("precio");
    precio.textContent = "$" + producto.precio.toLocaleString("es-CL");

    const boton = document.createElement("button");
    boton.classList.add("boton");
    boton.type = "button";
    boton.textContent = "Añadir al carrito";
    boton.addEventListener("click", agregarAlCarrito);

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);
    contenedor.appendChild(tarjeta);
  });

  actualizarContador();
}

document.addEventListener("DOMContentLoaded", cargarProductos);
