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
import CustomCategoryContext from "./context/CustomCategoryContext";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <CustomCategoryContext>
                <CustomCartContext>
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={"Ofertas de la semana"} />} />
                        <Route path="/category/:id" element={<ItemListContainer greeting={"Ofertas para una categoría"} />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </CustomCartContext>
              </CustomCategoryContext>
          </div>
      </BrowserRouter>
  );
}

export default App;