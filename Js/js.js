const contenidoTienda = document.getElementById("contenidoTienda")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")
const cantidadCarrito =document.getElementById("cantidadCarrito")



// aplicación del getItem y json para obtener lo que guardamos en el setItem
let carrito = JSON.parse(localStorage.getItem("guardarCompra")) || [];
//agregar productos al js
objproductos.forEach((productos)=>{
let contenido = document.createElement("div")
contenido.className = "card";
contenido.innerHTML = `
 <img src="${productos.img}">
<h3> ${productos.nombre} </h3>
<p class="precio"> $${productos.precio}</p>
`;
contenidoTienda.append(contenido)
   
let comprar =document.createElement("button")
comprar.innerText = "Comprar";
comprar.className = "comprar";

 contenido.append(comprar);

 //evento para comprar un producto al carrito
 comprar.addEventListener("click", () => {

   const repetir = carrito.some((repetirProducto)=> repetirProducto.id === productos.id)
   if (repetir  === true) {
      carrito.map((prod) => {
         if(prod.id === productos.id){
            prod.cantidad++
         }
      } )
   } else{
     carrito.push({
    id: productos.id,
    img: productos.img,
    nombre: productos.nombre,
    precio: productos.precio,
    cantidad: productos.cantidad,
 })
}
 console.log(carrito);
 conteoCarrto () 
 guardar()

 });
});

// aplicación del setItem y json para guardar informaciòn local

function guardar() {
   localStorage.setItem("guardarCompra" , JSON.stringify(carrito))
}

