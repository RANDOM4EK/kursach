import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = (props) => {
  const auth = { token: (props?.token || false) };

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
