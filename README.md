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
