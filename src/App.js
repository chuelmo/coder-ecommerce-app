import React from "react";
import Container from "@mui/material/Container";
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container style={{ paddingBottom: "30px" }}>
        <ItemListContainer greeting={"Las ofertas de la semana"} />
      </Container>
    </div>
  );
}

export default App;