# Entrega del proyecto final

- Según directivas del curso este proyecto necesita Firebase como backend, por lo tanto, para clonarlo y correrlo es necesario seguir estos pasos:

  1. Crear una cuenta en Firebase y crear un proyecto.
  2. Crear una base de datos para el proyecto con las siguientes colecciones:

     - categories:
       `code( { key: number, name: string } )`
     - products:
       ```json
       {
       articleImages: [
       {
       original: string (relative path in the site),
       thumbnail: string (relative path in the site)
       },
       ...
       ],
       category: foreign key,
       description: string,
       name: string,
       pictureUrl: string (relative path in the site),
       price: number,
       rating: number,
       stock: number
       }
       ```

     ````
     - orders:
       ```json
       {
       buyer: {
       email: string,
       name: string,
       phone: string
       },
       date: date,
       items: [
       {
       id: foreign key,
       name: string,
       price: number,
       quantity: number
       },
       ...
       ]
       }


     ````

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
