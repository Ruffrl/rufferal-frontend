import { createBrowserRouter, Navigate } from 'react-router-dom';
import { About, Dashboard, Home, Onboarding, Profile } from './routes';
// import { About, Dashboard, Home, Profile } from '.';
import { ErrorPage } from './components/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/onboarding',
    element: <Onboarding />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'profile',
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to="dashboard" replace />,
  },
]);
