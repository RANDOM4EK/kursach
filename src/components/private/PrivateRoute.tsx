import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import AuthRequired from '../auth/AuthRequired';

const PrivateRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <AuthRequired />;
  }

  return <Outlet />;
};

export default PrivateRoute;
