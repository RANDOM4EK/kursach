import Header from "./components/Hader/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from "./components/catalog/Catalog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
