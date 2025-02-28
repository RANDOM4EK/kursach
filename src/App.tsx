import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Catalog from './pages/Catalog';
import Works from './pages/Works';
import Cart from './pages/Cart';
import Questions from './pages/Questions';
import AuthorizationForm from './components/authorization/AuthorizationForm';
import PrivateRoute from './components/private/PrivateRoute';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            {/* Публичные маршруты */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthorizationForm />} />

            {/* Защищенные маршруты */}
            <Route element={<PrivateRoute />}>
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/works" element={<Works />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/questions" element={<Questions />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
