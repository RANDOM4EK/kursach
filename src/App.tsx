import Header from "./components/Hader/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from "./components/catalog/Catalog";
import AuthorizationForm from "./components/autorisation/AutorisationForm";
import PrivateRoute from "./components/privat/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<AuthorizationForm />} />
          <Route path="/catalog" element={<PrivateRoute />}>
            <Route path="/catalog" element={<Catalog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
