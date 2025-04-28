import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./pages/Categories/Categories";
import AllProduct from "./pages/allProduct/AllProduct";
import Tovar from "./pages/Tovar/Tovar";
import Basket from "./pages/Basket/Basket";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/All_Product" element={<AllProduct />} />
        <Route path="/product/:id" element={<Tovar />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
