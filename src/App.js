import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CustomCartContext from "./context/CustomCartContext";
import Cart from "./components/Cart";
import TestConsulta from "./firebase/TestConsulta";
import TestConsultaAll from "./firebase/TestConsultaAll";
import TestProductsForCategory from "./firebase/TestProductsForCategory";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <CustomCartContext>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting={"Ofertas de la semana"} />} />
                    <Route path="/category/:id" element={<ItemListContainer greeting={"Ofertas para una categoría"} />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/consulta" element={<TestConsulta />} />
                    <Route path="/consultaall" element={<TestConsultaAll />} />
                    <Route path="/consultabycategory" element={<TestProductsForCategory />} />
                </Routes>
              </CustomCartContext>
          </div>
      </BrowserRouter>
  );
}

export default App;