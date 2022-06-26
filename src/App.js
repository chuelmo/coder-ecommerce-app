import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<ItemListContainer greeting={"Ofertas de la semana"} />} />
                  <Route path="/category/:id" element={<ItemListContainer greeting={"Ofertas para una categoría"} />} />
                  <Route path="/item/:id" element={<ItemDetailContainer greeting={"Ofertas de la semana"} />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;