import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AuthLayout from 'layouts/AuthLayout';
import MainLayout from 'layouts/MainLayout';
import Login from 'modules/auth/pages/Login';
import Analytics from 'modules/Touchdown/pages/Analytics';
import Configure from 'modules/Touchdown/pages/Configure';
import Contest from 'modules/Touchdown/pages/Contest';
import ContestHistory from 'modules/Touchdown/pages/ContestHistory';
import Dashboard from 'modules/Touchdown/pages/Dashboard';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const ROUTES = {
  LOGIN: '/login',
  HOME: '/',
  HOME_TOUCHDOWN: '/touchdown',
  TOUCHDOWN: {
    DASHBOARD: '/touchdown/dashboard',
    CONTEST: '/touchdown/contest',
    CONTEST_HISTORY: '/touchdown/contest-history',
    ANALYTICS: '/touchdown/analytics',
    CONFIGURE: '/touchdown/configure',
  },
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route
            element={<PublicRoute component={Login} />}
            path={ROUTES.LOGIN}
          />
        </Route>

        {/* Private Routes */}
        <Route element={<MainLayout />}>
          <Route
            element={<PrivateRoute component={Dashboard} />}
            path={ROUTES.TOUCHDOWN.DASHBOARD}
          />
          <Route
            element={<PrivateRoute component={Contest} />}
            path={ROUTES.TOUCHDOWN.CONTEST}
          />
          <Route
            element={<PrivateRoute component={ContestHistory} />}
            path={ROUTES.TOUCHDOWN.CONTEST_HISTORY}
          />
          <Route
            element={<PrivateRoute component={Analytics} />}
            path={ROUTES.TOUCHDOWN.ANALYTICS}
          />
          <Route
            element={<PrivateRoute component={Configure} />}
            path={ROUTES.TOUCHDOWN.CONFIGURE}
          />
        </Route>

        <Route
          element={<Navigate replace to={ROUTES.TOUCHDOWN.DASHBOARD} />}
          path={ROUTES.HOME}
        />
        <Route
          element={<Navigate replace to={ROUTES.TOUCHDOWN.DASHBOARD} />}
          path={ROUTES.HOME_TOUCHDOWN}
        />
        <Route
          element={<Navigate replace to={ROUTES.TOUCHDOWN.DASHBOARD} />}
          path="*"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
