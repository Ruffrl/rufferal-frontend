import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import {
  CreateAccountAvatar,
  CreateAccountName,
  CreateAccountType,
  Dashboard,
  DevPlayground,
  ForgotPassword,
  Login,
  Onboarding,
  Profile,
  ResetPassword,
  Signup,
  Verification,
} from './routes';

export const router = createBrowserRouter([
  {
    path: '/onboarding',
    element: <Onboarding />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/verification',
    element: <Verification />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/playground',
    element: <DevPlayground />, // Keep as a testing playground for now
    errorElement: <ErrorPage />,
  },
  // BLARG - this starts AUTH
  {
    path: '/create-profile',
    element: <CreateAccountName />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/create-profile/name',
        element: <CreateAccountName />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/create-profile/avatar',
        element: <CreateAccountAvatar />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/create-profile/type',
        element: <CreateAccountType />,
        errorElement: <ErrorPage />,
      },
    ],
  },
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
  /* GUARD AGAINST INVALID URLS */
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
