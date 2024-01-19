# Quebble Records

**Tienda de venta de música**


## Logo

![image](./src/assets/quibblerecords-negro.svg)


## Vista Previa
[![Quebble-Records (Ecommerce - Coder REACTJS)](./src/assets/thumb.png)](https://vimeo.com/904311769?share=copy)


## Descripción
E-commerce creado para el curso de React Js Flex - Coderhouse.
Tienda de productos musicales (cds, dvds, boxsets) importados.

## Construido
<img src="./src/assets/React-icon.svg.png" width="42" height="42"> React
<img src="./src/assets/Vitejs-logo.svg" width="42" height="42"> Vite
<img src="./src/assets/firebase.svg" width="42" height="42"> Firebase

## Dependencias
* **react-router-dom**
* **sweetalert2**
* **react-elastic-carousel**
* **Bootstrap**
* **react-icons**



## Extras
Font Pairing:

**Lato** & **Playfair Display**

[**Lato**](https://fonts.google.com/specimen/Lato) & [**Playfair Display**](https://fonts.google.com/specimen/Playfair+Display)

#### Ejemplo de uso
![image](https://www.fontpairings.com/wp-content/uploads/2022/08/Playfair-Display-Lato-Font-Pairing-1024x1024.png)



## Instalación

 * Clonar repositorio:
    * git clone https://github.com/felesss333/ProyectoFinal-Dorado.git
 * Moverse a la carpeta principal:
    * cd ProyectoFinal-Dorado
* Instalar dependencias restantes:
    * npm install
* Instalar dependencia de react-elastic-carousel (*):
    * npm install --save react-elastic-carousel --force
* Compilar:
    * npm run dev

## Estructura del proyecto

### Navbar
    Logo + Link a inicio
    Categoría de los productos
    Cartwidget

### Body
    Contendrá y mostrará la carga de los productos mediante la categoría seleccionada, la sección de detalles de cada producto, la sección de carro de compras y la sección de confirmación de compra o cancelación y finalmente la sección de formulario.

### Footer
    Imagenes de las empresas auspiciantes

### Navegación
    Por defecto comienza en Todos los Productos disponibles, luego se puede navegar entre las rutas para poder filtrarlos por la categoría correspondiente.
    A los mismos se puede acceder mediante el botón de más información para visualizar los detalles puntuales del producto y a su vez un botón que permite agregar cantidades al carro de compras.
    Un atajo directo al carrito de compras que mostrará por defecto el aviso de que se encuentra vacio con un link que redirige a la última sección navegada. O en su defecto, los productos agregados con la opción de continuar con la compra / cancelarla.
    Si el usuario accede a continuar con la compra se encontrará con un formulario para validar datos previo a efectuarse el pedido. De lo contrario tiene una última instancia para cancelar la compra.


### Item
    Tarjeta / Cart que muestra la imagen principal del producto, los datos de nombre de la banda, nombre del producto, año de lanzamineto, formato (categoria) y un botón de acceso al detalle específico del producto. 

### ItemDetail
    Sección donde se desglosan todos los datos puntuales del producto seleccionado.
    Una sección de carousel donde se muestra las imagenes que posee el producto.
    Un apartado debajo del carousel que permite incrementar o disminuir la cantidad de productos que el usuario desea agregar al carro de compras y un botón de acceso al mismo que dispara un alerta toasty indicando la cantidad que se agregó y la descripción de nombre de la banda y disco.
    Un aside donde se muestran los datos de: Nombre de la banda, Nombre del Producto, estilos/generos de la banda, stock, valor por unidad, año de lanzamiento y por último el detalle de las pistas y la duración de las mismas.

### Carrito de compra
    Sección donde se visualizará el/los producto/s agregado/s con el detalle de la cantidad, un botón para disminuirla y otra para incrementarla. La misma posee una función que limita al usuario al valor de stock y ejecuta un sweetalert toasty que indica que se ha alcanzado el limite disponible.
    Luego se encuentra el detalle del nombre de la banda, seguido del nombre del disco, el valor unitario y el valor total que da la cantidad por el precio unitario. 
    Ya en la última columna se encuentra un botón que permite remover por completo el producto agregado previamente para que le resulte más rapido al usuario quitarlo.
    Por debajo encontramos un apartado que da el valor total final, producto de la cantidad por el valor unitario de todos los productos agregados en el carro.
    Dos botones que permiten continuar con la compra o vaciar de productos el carrito.

### Checkout
    Sección que contiene un formulario con el valor total final antes mencionado. Un detalle de aviso para que el usuario complete dicho formulario y cuatro campos de datos a completar. Los mismos son: Nombre completo, Teléfono, Email y Validación de Email.

    Por último dos botones que permiten al usuario procesar la compra o cancelarla.

    El botón de procesar compra primero comprueba si los campos se encuentran completos, luego comprueba si los campos de Email y Validación coinciden. Si ningúna de estas condiciones se cumplen primero ejecutará un sweetalert fire que le indicará al usuario los campos que faltan llenar, y si los campos están llenos pero los emails no coinciden, le indicará que el error es el de no validación. 
    Si toda las condiciones se cumplen, entonces se ejecuta el sweetalert indicandole que la compra fue satisfactoria y le proveerá al usuario un número de pedido.


========================

### Deploy:
*Aclaración: Por algún motivo vercel no toma las imagenes del array, sin embargo las rutas están bien linkeadas, de hecho al usarse local y mediante el ruteo de Firebase, funciona.
De todos modos dejo el link para observar la app:

[Vercel](https://proyecto-final-dorado.vercel.app/)

========================

### Datos de contacto

[Linkedin](https://www.linkedin.com/in/felipe-dorado-29315232/)
[Github](https://github.com/felesss333/)
[Behance](https://www.behance.net/Felipedorado)

Email: felipedorado3@hotmail.com
