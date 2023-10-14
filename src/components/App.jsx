import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import Layout from 'components/Layout/Layout';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';

const Home = lazy(() => import('../components/pages/Home'));
const Contacts = lazy(() => import('../components/pages/Contacts'));
const Register = lazy(() => import('../components/pages/Register'));
const Login = lazy(() => import('../components/pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>'Wait a minute! We are trying to fetch your data...'</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={Register} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={Login} />}
        />

        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={Contacts} />}
        />
      </Route>
    </Routes>
  );
};
