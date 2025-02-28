import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  if (location.pathname === '/login') {
    return <Outlet />;
  }

  return (
    <div className="layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
