const productosTiendaBS = [
    {
        id: 1,
        nombre: "Camiseta Boston Celtics",
        imagen: "../images/productos/bc-camiseta.jpg",
        categoria: { nombre: "Camiseta", id: "boston" },
        precio: 1000
    },
    {
        id: 2,
        nombre: "Pantalón Boston Celtics",
        imagen: "../images/productos/bc-pantalon.jpg",
        categoria: { nombre: "Pantalon", id: "boston" },
        precio: 1000
    },
    {
        id: 3,
        nombre: "Buzo Boston Celtics",
        imagen: "../images/productos/bc-buzo.jpg",
        categoria: { nombre: "Buzo", id: "boston" },
        precio: 1000
    },
    {
        id: 4,
        nombre: "Gorra Boston Celtics",
        imagen: "../images/productos/bc-gorra.jpg",
        categoria: { nombre: "Gorra", id: "boston" },
        precio: 1000
    },
    {
        id: 5,
        nombre: "Camiseta Chicago Bulls",
        imagen: "../images/productos/cb-camiseta.jpg",
        categoria: { nombre: "Camiseta", id: "chicago" },
        precio: 1000
    },
    {
        id: 6,
        nombre: "Pantalón Chicago Bulls",
        imagen: "../images/productos/cb-pantalon.jpg",
        categoria: { nombre: "Pantalon", id: "chicago" },
        precio: 1000
    },
    {
        id: 7,
        nombre: "Buzo Chicago Bulls",
        imagen: "../images/productos/cb-buzo.jpg",
        categoria: { nombre: "Buzo", id: "chicago" },
        precio: 1000
    },
    {
        id: 8,
        nombre: "Gorra Chicago Bulls",
        imagen: "../images/productos/cb-gorra.jpg",
        categoria: { nombre: "Gorra", id: "chicago" },
        precio: 1000
    },
    {
        id: 9,
        nombre: "Camiseta Lakers",
        imagen: "../images/productos/la-camiseta.jpg",
        categoria: { nombre: "Camiseta", id: "lakers" },
        precio: 1000
    },
    {
        id: 10,
        nombre: "Pantalón Lakers",
        imagen: "../images/productos/la-pantalon.jpg",
        categoria: { nombre: "Pantalon", id: "lakers" },
        precio: 1000
    },
    {
        id: 11,
        nombre: "Buzo Lakers",
        imagen: "../images/productos/la-buzo.jpg",
        categoria: { nombre: "Buzo", id: "lakers" },
        precio: 1000
    },
    {
        id: 12,
        nombre: "Gorra Lakers",
        imagen: "../images/productos/la-gorra.jpg",
        categoria: { nombre: "Gorra", id: "lakers" },
        precio: 1000
    },
    {
        id: 13,
        nombre: "Camiseta Spurs",
        imagen: "../images/productos/sa-camiseta.jpg",
        categoria: { nombre: "Camiseta", id: "spurs" },
        precio: 1000
    },
    {
        id: 14,
        nombre: "Pantalón Spurs",
        imagen: "../images/productos/sa-pantalon.jpg",
        categoria: { nombre: "Pantalon", id: "spurs" },
        precio: 1000
    },
    {
        id: 15,
        nombre: "Buzo Spurs",
        imagen: "../images/productos/sa-buzo.jpg",
        categoria: { nombre: "Buzo", id: "spurs" },
        precio: 1000
    },
    {
        id: 16,
        nombre: "Gorra Spurs",
        imagen: "../images/productos/sa-gorra.jpg",
        categoria: { nombre: "Gorra", id: "spurs" },
        precio: 1000
    },
    {
        id: 17,
        nombre: "Camiseta Warriors",
        imagen: "../images/productos/gs-camiseta.jpg",
        categoria: { nombre: "Camiseta", id: "warriors" },
        precio: 1000
    },
    {
        id: 18,
        nombre: "Pantalón Warriors",
        imagen: "../images/productos/gs-pantalon.jpg",
        categoria: { nombre: "Pantalon", id: "warriors" },
        precio: 1000
    },
    {
        id: 19,
        nombre: "Buzo Warriors",
        imagen: "../images/productos/gs-buzo.jpg",
        categoria: { nombre: "Buzo", id: "warriors" },
        precio: 1000
    },
    {
        id: 20,
        nombre: "Gorra Warriors",
        imagen: "../images/productos/gs-gorra.jpg",
        categoria: { nombre: "Gorra", id: "warriors" },
        precio: 1000
    }
];



let carrito = [];
const productosItems = document.querySelector('#productos-items');
const productosCarrito = document.querySelector('#productos-carrito');
const productosPrecioTotal = document.querySelector('#productos-precio-total');
const productosVaciarCarrito = document.querySelector('#productos-btn-vaciar');
const productosCarritoLS = window.localStorage;

/*
* Modifico DOM mediante JS para la estructura de productos.
*/
function mostrarProductosDom() {
    productosTiendaBS.forEach((info) => {
        // Estructura
        const estructuraDOM = document.createElement('div');
        estructuraDOM.classList.add('card','col-md-4');
        // Body
        const estructuraDOMCardBody = document.createElement('div');
        estructuraDOMCardBody.classList.add('card-body');
        // Imagen
        const estructuraDOMImagen = document.createElement('img');
        estructuraDOMImagen.classList.add('img-fluid');
        estructuraDOMImagen.setAttribute('src', info.imagen);
        // Titulo
        const estructuraDOMTitle = document.createElement('h5');
        estructuraDOMTitle.classList.add('card-title');
        estructuraDOMTitle.textContent = info.nombre;
        // Precio
        const estructuraDOMPrecio = document.createElement('p');
        estructuraDOMPrecio.classList.add('card-text');
        estructuraDOMPrecio.textContent = `$ ${info.precio}`;
        // Botón 
        const estructuraDOMBoton = document.createElement('button');
        estructuraDOMBoton.classList.add('btn', 'btn-secondary');
        estructuraDOMBoton.textContent = 'Añadir al carrito';
        estructuraDOMBoton.setAttribute('flagBotonAñadir', info.id);
        estructuraDOMBoton.addEventListener('click', funAddProductoCarrito);
        // Insertamos
        estructuraDOMCardBody.appendChild(estructuraDOMImagen);
        estructuraDOMCardBody.appendChild(estructuraDOMTitle);
        estructuraDOMCardBody.appendChild(estructuraDOMPrecio);
        estructuraDOMCardBody.appendChild(estructuraDOMBoton);
        estructuraDOM.appendChild(estructuraDOMCardBody);
        productosItems.appendChild(estructuraDOM);
    });
}

/*
* Agrego al carrito
*/
function funAddProductoCarrito(evento) {
    // Agregamos el producto elegido al carrito
    carrito.push(evento.target.getAttribute('flagBotonAñadir'))
    // Actualizamos el carrito 
    funActCarrito();
    // Actualizamos el LocalStorage
    funSaveCarritoLS();
}

/**
* Muestro los elementos en el carrito.
Primero limpio el HTML, luego verifico si ya existe y finalmente los agrego. Si el elemento existe, aumento la cantidad en 1
*/
function funActCarrito() {

    productosCarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {

        const miItem = productosTiendaBS.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);

        // HTML de elementos en carrito
        const estructuraDOM = document.createElement('li');
        estructuraDOM.classList.add('list-group-item', 'text-right', 'mx-2');
        estructuraDOM.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - $ ${miItem[0].precio}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);

        estructuraDOM.appendChild(miBoton);
        productosCarrito.appendChild(estructuraDOM);
    });
    // Precio Total
    productosPrecioTotal.textContent = calcularTotal();
}

/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // actualizamos HTML y LS
    funActCarrito();
    funSaveCarritoLS();

}

/**
 * Calcula el precio total con productos repetidos
 */
function calcularTotal() {
    
    return carrito.reduce((total, item) => {
        const miItem = productosTiendaBS.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
* Vaciado de carrito y LS
*/
function vaciarCarrito() {
    carrito = [];
    funActCarrito();
    localStorage.clear();
}

//Guardo carrito en LS
function funSaveCarritoLS() {
    productosCarritoLS.setItem('carrito', JSON.stringify(carrito));
}

function funUploadCarritoLS() {
    // Verifico existencia de carrito en LS
    if (productosCarritoLS.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(productosCarritoLS.getItem('carrito'));
    }
}

// Evento de vaciado de carrito
productosVaciarCarrito.addEventListener('click', vaciarCarrito);

funUploadCarritoLS();
mostrarProductosDom();
funActCarrito();

