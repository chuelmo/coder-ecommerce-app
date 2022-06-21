import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import iguana from './assets/img/reptile.jpg';
import leones from './assets/img/leones.png';
import canguro from './assets/img/canguro.jpg';
import jirafa from './assets/img/jirafa.jpg';
import hipo from './assets/img/hipo.jpg';

const animales = [
  {
    name: 'Leon',
    image: leones,
    alt: 'leones descansando',
    greeting: 'Los Leones son unos animales maravillosos y majestuosos',
    stock: 5
  },
  {
    name: 'Iguana',
    image: iguana,
    alt: 'green iguana',
    greeting: 'Hola Iguana, no te preocupes, no voy a vender animales',
    stock: 3
  },
  {
    name: 'Canguro',
    image: canguro,
    alt: 'canguro saltando',
    greeting: 'Vivo en Australia y me desplazo saltando',
    stock: 5
  },
  {
    name: 'Jirafa',
    image: jirafa,
    alt: 'Una jirafa alta',
    greeting: 'Soy el animal más alto del mundo',
    stock: 2
  },
  {
    name: 'Hipo',
    image: hipo,
    alt: 'gran hipopotamo',
    greeting: 'Soy uno de los animales más grandes que existen y muy peligroso',
    stock: 4
  }
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Las ofertas de la semana</h2>
      <Box sx={{ flexGrow: 1, margin: "auto", justifyContent: 'space-evenly' }}>
        <Grid container spacing={2} direction="row" alignItems="flex-start">          
          {animales.map((animal, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <ItemListContainer {...animal}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;