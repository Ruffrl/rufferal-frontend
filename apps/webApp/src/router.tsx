import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { Dashboard, DevPlayground, Home, Onboarding, Profile } from './routes';

export const router = createBrowserRouter([
  {
    path: '/onboarding',
    element: <Onboarding />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Home />, // BLARG - This needs an update to convert to a <Login/> route component
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <Home />, // BLARG - New component <Signup/>
    errorElement: <ErrorPage />,
  },
  {
    path: '/verification',
    element: <Home />, // BLARG - New component <EmailVerification/>
    errorElement: <ErrorPage />,
  },
  {
    path: '/create-account',
    element: <Home />, // BLARG - New component <CreateAccount/>
    errorElement: <ErrorPage />,
  },
  {
    path: '/playground',
    element: <DevPlayground />, // Keep as a testing playground for now
    errorElement: <ErrorPage />,
  },
  // BLARG - this starts AUTH
  {
    path: '/',
    element: <Dashboard />, // Dashboard == search and browse; Manage guest search and browse vs logged in search and browse
    errorElement: <ErrorPage />,
  },
  {
    path: '/my-profile',
    element: <Profile />, // BLARG - convert to <MyProfile/>
    errorElement: <ErrorPage />,
  },
  // BLARG - how to do routes by id with router v6 - I think i need to convert to Routes method?
  {
    path: '/profiles/:id',
    element: <Profile />, // BLARG - needs <PetOwnerProfile />
    errorElement: <ErrorPage />,
  },
  {
    path: '/caretakers/:id',
    element: <Profile />, // BLARG - needs <CaretakerProfile />
    errorElement: <ErrorPage />,
  },
  {
    path: '/profiles/:id/pets',
    element: <Profile />, // BLARG - needs <ManagePets />
    errorElement: <ErrorPage />,
  },
  {
    path: '/profiles/:id/pets/:id',
    element: <Profile />, // BLARG - needs <PetProfile />
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to="dashboard" replace />,
  },
]);
