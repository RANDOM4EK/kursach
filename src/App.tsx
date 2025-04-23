import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Categories from "./pages/Categories/Categories";
import AllProduct from "./pages/allProduct/AllProduct";
import NotFound from "./pages/NotFound/NotFound";
import Tovar from "./pages/Tovar/Tovar";
import Basker from "./pages/Basket/Basker";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Categories" element={<Categories/>} />
        <Route path="/All_Product" element={<AllProduct/>} />
        <Route path="/product/:id" element={<Tovar/>} />
        <Route path="/brasker" element={<Basker/>} />
        <Route path="*" element={<NotFound/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
