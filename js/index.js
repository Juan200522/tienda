// Variable para almacenar los productos seleccionados
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
  const producto = {
    nombre: nombre,
    precio: precio
  };
  carrito.push(producto);
  mostrarMensaje('Se agregó correctamente al carrito');
}

// Función para mostrar los productos seleccionados en el carrito
function mostrarCarrito() {
  const cartItems = document.getElementById('cart-items');
  const cartSummary = document.getElementById('cart-summary');
  cartItems.innerHTML = '';
  cartSummary.innerHTML = '';

  carrito.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - ${producto.precio}`;
    cartItems.appendChild(li);
  });

  const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
  const summary = document.createElement('p');
  summary.textContent = `Total: $${total.toFixed(2)}`;
  cartSummary.appendChild(summary);
}

// Función para mostrar mensajes en una ventana emergente
function mostrarMensaje(mensaje) {
  alert(mensaje);
}

// Evento clic en el botón de mostrar carrito
const cartButton = document.getElementById('cart-button');
cartButton.addEventListener('click', function() {
  const cartDiv = document.getElementById('cart');
  cartDiv.style.display = 'block';
  mostrarCarrito();
});
