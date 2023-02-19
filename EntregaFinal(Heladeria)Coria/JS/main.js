const productos = [
      {
        id: 1,
        nombre: 'Helado de 1kg',
        precio: 200,
        descripcion: 'Gustos disponibles:chocolate,dulce de leche, frutilla, vainilla, frutos del bosque, tiramisu.',
        imagen: '/imagenes/Helado de 1kg.jpeg',
        categoria: 'Helados',
        link:"/Productos_HTML/helados.html"
      },
      {
        id: 2,
        nombre: 'Helado de 1/2kg',
        precio: 1500,
        descripcion: 'Gustos disponibles:chocolate,dulce de leche, frutilla, vainilla, frutos del bosque, tiramisu.',
        imagen: '/imagenes/helado de medio kilo.jpeg',
        categoria: 'Helados',
        link:"/Productos_HTML/helados.html"
      },
      {
        id: 3,
        nombre: 'Helado de 1/4kg',
        precio: 2000,
        descripcion: 'Gustos disponibles:chocolate,dulce de leche, frutilla, vainilla, frutos del bosque, tiramisu.',
        imagen: '/imagenes/helado de un cuarto.jpeg',
        categoria: 'Helados',
        link:"/Productos_HTML/helados.html"
      },
      {
        id: 4,
        nombre: 'Pastel Cheesecake',
        precio: 500,
        descripcion: 'Super producto 4 para el hogar',
        imagen: '/imagenes/cheesecake.jpeg',
        categoria: 'Pasteles',
        link:'/Productos_HTML/pasteles.html'
      },
      {
        id: 5,
        nombre: 'Pastel Selva Negra',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: '/imagenes/selva negra.jpeg',
        categoria: 'Pasteles',
        link:'/Productos_HTML/pasteles.html'
      },
      {
        id: 6,
        nombre: 'Chocotorta',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: '/imagenes/chocotorta.jpeg',
        categoria: 'Pasteles',
        link:'/Productos_HTML/pasteles.html'
      },
      {
        id: 7,
        nombre: 'Torta de Frutilla',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: '/imagenes/torta de frutilla.jpeg',
        categoria: 'Pasteles',
        link:'/Productos_HTML/pasteles.html'
      },
      {
        id: 8,
        nombre: 'Bombon Suizo',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: '/imagenes/bombon suizo.jpeg',
        categoria: 'Postres',
        link:'/Productos_HTML/postres.html'
      },
      {
        id: 9,
        nombre: 'Helados de Agua',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: '/imagenes/helados de agua.jpeg',
        categoria: 'Helados de agua',
        link:'/Productos_HTML/heladosDeAgua.html'
      },
      {
        id: 10,
        nombre: 'Conos de helado',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: '/imagenes/conos de helado.jpeg',
        categoria: 'Otros',
        link:'/Productos_HTML/Otros.html'
      },
      {
        id: 11,
        nombre: 'Comida Congelada',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'Comida Congelada',
        link:'/Productos_HTML/heladosDeAgua.html'
      }
    ];
  
  
    const contenedorProductos = document.getElementById('contenedor-productos');
    const carritoTexto = document.getElementById('carrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevaCantidadCarrito = carrito.reduce((acc, { cantidad }) => acc + cantidad, 0);
    carritoTexto.innerHTML = `Carrito(${nuevaCantidadCarrito})`;
    
    const agregarCardDeProducto = producto => {
      const cardProducto = document.createElement('div');
      cardProducto.className = 'col';
      cardProducto.innerHTML = `
        <div id="producto-${producto.id}" class="card text-black mb-3" style="background-color: #9e9cff;">
          
          <div class="card-body" style="box-shadow: 0px 0px 10px 0px #333">
          <img src="${producto.imagen}" class=" img-fluid card-img-top rounded mx-auto d-block" style="height: 180px;">
            <h2>${producto.nombre}</h2>
            <p class="fs-4">${producto.descripcion}</p>
            <p class="fs-5">Categoria: ${producto.categoria}</p>
            <p>$ ${producto.precio}</p>
            <button class="btn btn-primary" id="agregarAlCarrito">Agregar al carrito</button>
            <button type="button" class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark" id="link" onclick="location.href='${producto.link}'" value="click here">enlace</button>
            <div class="dropdown">
                 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown button
                 </button>
                     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                               <a class="dropdown-item" href="B">Action</a>
                               <a class="dropdown-item" href="C">Another action</a>
                               <a class="dropdown-item" href="D">Something else here</a>
                     </div>
              </div>
          </div>
        </div>
      `;
    
      contenedorProductos.append(cardProducto);
    
      document.querySelector(`#producto-${producto.id} button`).addEventListener(
        'click',
        () => {
          const productoEnElCarrito = carrito.find(
            (productoCarrito) => productoCarrito.id === producto.id
          );
    
          // const cantidad = (productoEnElCarrito?.cantidad ? productoEnElCarrito.cantidad : 0) + 1;
          const cantidad = (productoEnElCarrito?.cantidad || 0) + 1
    
          if (productoEnElCarrito) {
            productoEnElCarrito.cantidad = cantidad;
          } else {
            carrito.push({
              ...producto,
              cantidad
            });
          }
    
          localStorage.setItem('carrito', JSON.stringify(carrito));
    
          const nuevaCantidadCarrito = carrito.reduce((acc, { cantidad }) => acc + cantidad, 0);
          carritoTexto.innerHTML = `Carrito(${nuevaCantidadCarrito})`;
        }
      );
    }
    
    productos.forEach((producto => {
      agregarCardDeProducto(producto);
    }));
    
    document.getElementById('select-categoria').addEventListener(
      'input',
      (e) => {
        const categoriaAFiltrar = e.target.value;
        const productosFiltrados = categoriaAFiltrar ?
          productos.filter((producto) => producto.categoria === categoriaAFiltrar) :
          productos;
        
        document.querySelectorAll('.col').forEach(child => child.remove());
        productosFiltrados.forEach(producto => {
          agregarCardDeProducto(producto);
        });
      }
    );

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}



const botonAgregar = document.getElementById('agregarAlCarrito');
botonAgregar.addEventListener('click', () => {
  Swal.fire({
    title: 'Está seguro que quiere agregar este producto al carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, quiero agregarlo al carrito',
    cancelButtonText: 'No, no quiero agregarlo'
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      Swal.fire({
          title: 'se ha agregado el producto al carrito',
          icon: 'success',
          text: 'El producto a sido agregado al carrito'
      })
    }
  })
})

