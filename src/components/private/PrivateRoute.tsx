import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuthHook';
import AuthorizationForm from '../authorization/AuthorizationForm';

const PrivateRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <AuthorizationForm />;
  }

  return <Outlet />;
};

export default PrivateRoute;
