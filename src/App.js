import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const greeting = 'Hola Iguana, no te preocupes, no voy a vender animales';
  return (
    <div className="App">
      <NavBar />
      <h2>Las ofertas de la semana</h2>
      <ItemListContainer greeting={greeting}/>
    </div>
  );
}

export default App;
