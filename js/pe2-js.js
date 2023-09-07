function miFuncion() {
    //PRE ENTREGA 2 - JS - AUGUSTO PRADOS
    class Producto {
        constructor(nombre, precio) {
            this.nombre = nombre.toUpperCase();
            this.precio = parseFloat(precio);
        }
    }
    //DECLARACIÓN DE FUNCIONES
    function eliminarProducto(nombre) {
        arrayProducto = arrayProducto.filter(function (arrayProducto) {
            return arrayProducto.nombre !== nombre;
        });
    }

    function buscarProducto(nombre) {
        let productoEncontrado = arrayProducto.find(function (arrayProducto) {
            return arrayProducto.nombre === nombre;
        });
        return productoEncontrado;
    }


    //DECLARACIÓN DE VARIABLES
    let nuevoNombre;
    let nuevoPrecio;
    let buscarProductoEliminar;
    let buscarProductoDeseado;
    let altaMensaje;
    let bajaMensaje;
    let mensaje;
    let arrayProducto = []; //ARRAY VACÍO

    //PROGRAMA PRINCIPAL
    while (true) {
        const opcion = (parseInt(prompt("Ingrese una opción: \n 1- Ingresar un nuevo producto \n 2- Eliminar un producto existente \n 3- Buscar un producto particular \n 4- Ver todos los productos \n 0- Salir")));

        if (opcion == 0) {
            alert("Adios!");
            break;
        } else {
            switch (opcion) {
                case 1:
                    nuevoNombre = prompt("Ingrese el nombre del producto nuevo: ");
                    nuevoPrecio = parseFloat(prompt("Ingrese el precio del producto " + nuevoNombre));
                    let nuevoProducto = new Producto(nuevoNombre, nuevoPrecio);
                    arrayProducto.push(nuevoProducto);
                    altaMensaje = "Productos de la tienda\n";
                    for (let i = 0; i < arrayProducto.length; i++) {
                        altaMensaje += "Item: " + arrayProducto[i].nombre + ", $" + arrayProducto[i].precio + "\n";
                    }
                    alert(altaMensaje);
                    altaMensaje = "";
                    break;

                case 2:
                    buscarProductoEliminar = prompt("Ingrese el producto a eliminar: (En mayusculas)");

                    eliminarProducto(buscarProductoEliminar);

                    bajaMensaje = "Productos de la tienda\n";
                    for (let i = 0; i < arrayProducto.length; i++) {
                        console.log(arrayProducto.length);
                        bajaMensaje += "Item: " + arrayProducto[i].nombre + ", $" + arrayProducto[i].precio + "\n";
                    }
                    alert(bajaMensaje);
                    bajaMensaje = "";
                    break;

                case 3:
                    buscarProductoDeseado = prompt("Ingrese el producto buscado: (En mayusculas)");
                    const prodEncontrado = buscarProducto(buscarProductoDeseado)
                    if (prodEncontrado) {
                        alert("Item: " + prodEncontrado.nombre + ", " + "$: " + prodEncontrado.precio);
                    } else {
                        alert("No se encuentra el producto");
                    }
                    break;

                case 4:
                    mensaje = "Productos de la tienda \n";
                    for (let index = 0; index < arrayProducto.length; index++) {
                        mensaje += "Item: " + arrayProducto[index].nombre + ", $" + arrayProducto[index].precio + "\n";
                    }
                    alert(mensaje);
                    break;
                default:
                    alert("Opcion no valida");
                    break;
            }
        }
    }
}