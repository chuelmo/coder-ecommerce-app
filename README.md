# Entrega del proyecto final

- En la rúbrica se solicita un gif mostrando el funcionamiento del proyecto o deployarlo, en mi caso el proyecto está deployado en dos plataformas distintas:

  - [firebase](https://chuelmo-coder-react-37750.web.app/ "Sitio alojado en Firebase")
  - [vercel](https://coder-ecommerce-app.vercel.app/ "Sitio alojado en Vercel")

- Según directivas del curso este proyecto necesita Firebase como backend, por lo tanto, para clonarlo y correrlo es necesario seguir estos pasos:

  1. Crear una cuenta en Firebase y crear un proyecto.
  2. Crear una base de datos para el proyecto con las siguientes colecciones:

     - categories:
       ```json
       {
         "key": "number",
         "name": "string"
       }
       ```
     - products:
       ```json
       {
         "articleImages": [
           {
             "original": "string (relative path in the site)",
             "thumbnail": "string (relative path in the site)"
           }
         ],
         "category": "foreign key",
         "description": "string",
         "name": "string",
         "pictureUrl": "string (relative path in the site)",
         "price": "number",
         "rating": "number",
         "stock": "number"
       }
       ```
     - orders:
       ```json
       {
         "buyer": {
           "email": "string",
           "name": "string",
           "phone": "string"
         },
         "date": "date",
         "items": [
           {
             "id": "foreign key",
             "name": "string",
             "price": "number",
             "quantity": "number"
           }
         ]
       }
       ```

  3. Correr npm install
  4. Copiar el archivo .env.example como .env y llenarlo con la información correcta sacada de la configuración del proyecto en firebase. Listo, ya puedes correr y modificar el proyecto a tu antojo.

- Uso de librerías

  - [Material UI](https://mui.com/ "MUI: The React component library you always wanted")
  - [React Router DOM](https://reactrouter.com/docs/en/v6/getting-started/overview "react-router-dom")
  - [React Hook Form](https://react-hook-form.com/ "Performant, flexible and extensible forms with easy-to-use validation.")
  - [React Image Gallery](https://www.npmjs.com/package/react-image-gallery "React image gallery is a React component for building image galleries and carousels")

- El menú "Categorías" es dinámico, se carga desde el backend (collection categories)
- Al elegir una categoría sólo se mostrarán los artículos de esa categoría.
- Intentar cargar una categoría que no existe redirecciona a home (/)
- No se pueden comprar más artículos de los que hay en stock.
- No se pierde el carrito si se cierra el navegador (usamos localstorage)
- Para todas las rutas no previstas tenemos una página 404.
- Intentar entrar al detalle de un artículo que no existe /item/:id redirecciona a Home.
- El formulario se valida utilizando la librería react-hook-form y la orden se guarda en firebase.
- El componente ItemDetail muestra una galería de imágenes del producto y renderiza el &lt;Item&gt; con un parámetro que le dice que se muestre con los detalles, que se ocultan cuando el &lt;Item&gt; se renderiza en &lt;ItemListContainer&gt;
- La ruta /cart que lleva al carrito solo está disponible cuando el carrito tiene algún item, de lo contrario no se podrá navegar hasta ella.
- La vista del carrito en Desktop y Mobile es muy diferente, mientras que en Desktop los items se agrupan por categoría, con el total de items comprados en cada una, en mobile por simplicidad se muestra una tabla con 2 columnas con la información pertinente sin perder funcionalidad.
- Hay solo dos maneras de llegar hasta el carrito:
  - Una es hacer click en el carrito en la barra de navegación cuando está disponible (aparece solo cuando el carrito tiene algo).
  - La otra es presionando el botón comprar cuando estamos viendo el detalle de un producto.
- Para llegar hasta el detalle de un producto hay que hacer click en el ícono verde que hay en la imágen de cada uno de los productos.
- El botón "Comprar" en el detalle del producto lleva hasta el carrito, si el carrito está vacío agrega una unidad del producto en cuestión.
- Mientras la aplicación está esperando respuesta desde el backend, cuando se recuperan artículos, cuando se guarda la orden de compra, etc, hay sutiles animaciones (de material ui) que se muestran mientras dura la carga.
- La aplicación es responsive
- Toda la aplicación está envuelta en un theme personalizado, los cambios con respecto al theme original de material son mínimos, la idea es que desde ahí se pueda cambiar totalmente la apariencia del sitio.

# Último desafío antes del proyecto final - Item Collection II

- Se le piden datos al cliente para generar la orden de compra.
- La orden de compra se guarda en la colección "orders" en firebase.
- Se utiliza react-hook-form para no reinventar la rueda, hace las validaciones del form de una forma muy simple y flexible.
- En cuanto el cliente envía la orden, se vacía el carrito y se oculta el form.

# Desafío itemCollection (Firebase)

- Se crea la cuenta en Firebase
- Se utilizan los archivos .env y .env.develop para aislar las configuraciones y mantener configuraciones distintas para desarrollo y producción.
- En Firebase se crean 2 colections:
  - categories
  - products
- En el código se hacen diferentes tipos de consultas:
  - Consulta de toda una colección sin filtros (categories)
  - Consulta de una colección con filtros (products by category)
  - Consulta de un solo documento (products by id)
- Se eliminan todos los mocks, ya no hay datos mockeados en el código.
- Con un componente que no pushié cree toda la data en firebase tomando la data de los mocks.
- Navegar a "/" consulta toda la colección de products (como prueba de concepto porque tengo muy pocos productos, se debería limitar)
- Navegar a "/category/:id" consulta la colección products filtrada por category
- Navegar a "/item/:id" consulta por un solo producto.
- Se deploya la app tanto en Firebase como en Vercel
  - https://coder-ecommerce-app.vercel.app/
  - https://chuelmo-coder-react-37750.web.app/
- Se crea otro contexto CategoryContext que envuelve a toda la aplicación, para consultar las categorías una sola vez, así se puede armar el menú dinámicamente y también es usado en el /cart

# Desafío CartView

- Tengo implementado React Context
- Está agregada la ruta /cart al BrowserRouter
- El componente CartWidget es reactivo al contexto
- Hice el deploy en Vercel
- Cart contiene el desglose de la compra agrupada por categorías.
- Cart muestra el precio total
- Cart agrupa los items por categoría
- Cart muestra un mensaje de que el carrito está vacío y redirige a "/"
- CartWidget muestra la cantidad de items comprados y redirige a /cart
- CartWidget no se renderiza cuando el carrito está vacío.
- El botón de comprar (que redirige a /Cart) está siempre visible (porque me gusta más).
- En el carrito (/Cart) hay un botón que vacía el carro.
- Se cumple la rúbrica

# Entrega intermedia del Proyecto Final

En este README.md voy agregando la información de cada entrega al principio del mismo, tal cual entradas de un blog, la última entrada o más nueva está arriba y la más vieja está abajo.

- Dependencias:
  - Material UI https://mui.com/material-ui/getting-started/overview/
  - react-router-dom https://reactrouter.com/docs/en/v6/getting-started/overview
  - react-image-gallery https://www.npmjs.com/package/react-image-gallery
    - Se utiliza esta librería para mostrar imágenes del producto en el itemDetail
- Rúbrica de la entrega
  - **Componentes**
  - [x] NavBar con CartWidget
  - [x] Catálogo
  - [x] Detalle del producto
  - **Rutas a configurar**
  - [x] '/' navega a &lt;ItemListContainer /&gt;
  - [x] '/category/:id' &lt;ItemListContainer /&gt;
  - [x] '/item/:id' navega a &lt;ItemDetailContainer /&gt;
  - **Links a configurar**
  - [x] Clickear en el brand debe navegar a '/'
  - [x] Clickear un Item.js debe navegar a '/item/:id'
  - [x] Clickear en una categoría del navbar debe navegar a '/category/:categoryId'
- Funcionamiento
  - Se emula el asincronismo utilizando setTimeout y estados para mostrar un componente u otro según se esté "cargando" o no la info.
- Animación gif para ver el funcionamiento del sitio
  - [x] La animación se encuentra en: [PrimerEntregaPF.gif](https://drive.google.com/file/d/10XYUjUzZyuRfiKn1LBV8ys6ZbLU6TLUp/view?usp=sharing)

**Nota:** Para correr esta app:

- npm install
- crear el archivo .env (en este caso basta con copiar o renombrar el archivo .env.example)

<hr>

# Entrega detalle del Producto

- Se agregan los componentes:
  - ItemDetailContainer
  - ItemDetail
- Se genera todo el catálogo con datos mockeados.
- Se utiliza el .env para configurar posibles y diferentes rutas a las imágenes
- Las rutas ya están funcionando y se explicarán en la próxima entrega

# Entrega cd catálogo con Maps

- Se agregan los componentes
  - Item
  - ItemList
- Se crea el componente ItemListLoader para mostrar tarjetas "cargando..."
- Se implementa un async mock para emular la carga de artículos desde un api.

# Entrega del componente ItemCount

- Se crea el componente ItemCount de acuerdo a la consigna
- Recibe el stock disponible del item y se pueden agregar items hasta alcanzar el stock
- Si no hay item los botones aumentar y decrementar no tienen efecto
- Se ejecuta la función onAdd solo cuando hay una cantidad mayor que cero seleccionada.
- Se muestra la cantidad incializada con el parámetro initial

# Tercer entrega - Crear 2 componentes

- Componente CartWidget con un ícono, ubicado en el NavBar.
- Componente ItemListContainer que recibe una prop 'greeting' y la muestra.

# Segunda entrega - Crear un menú simple

- Se crea una NavBar usando Material UI

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Curso de React en CoderHouse

- Alumno: Christian Huelmo
- Modificación del README.md para verificar sincronización de repo local con repo remoto
