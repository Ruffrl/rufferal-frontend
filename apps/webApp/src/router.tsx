import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import {
  CreatePetCareplan,
  CreatePetDetails,
  CreatePetPersonality,
  CreateProfileAvatar,
  CreateProfileName,
  CreateProfilePets,
  CreateProfileType,
  Dashboard,
  Dashboard2,
  DevPlayground,
  ForgotPassword,
  Login,
  ManagePets,
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
    element: <CreateProfileName />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/create-profile/name',
    element: <CreateProfileName />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/create-profile/avatar',
    element: <CreateProfileAvatar />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/create-profile/type',
    element: <CreateProfileType />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/create-profile/pets',
    element: <CreateProfilePets />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/my-pets',
    element: <ManagePets />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/my-pets/create',
    element: <CreatePetDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/my-pets/create/details',
    element: <CreatePetDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/my-pets/create/personality',
    element: <CreatePetPersonality />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/my-pets/create/careplan',
    element: <CreatePetCareplan />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: '/create-profile',
  //   // element: <CreateProfileName />,
  //   element: undefined,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: '/create-profile/name',
  //       element: <CreateProfileName />,
  //       errorElement: <ErrorPage />,
  //     },
  //     {
  //       path: '/create-profile/avatar',
  //       element: <CreateProfileAvatar />,
  //       errorElement: <ErrorPage />,
  //     },
  //     {
  //       path: '/create-profile/type',
  //       element: <CreateProfileType />,
  //       errorElement: <ErrorPage />,
  //     },
  //   ],
  // },
  {
    path: '/dashboard2',
    element: <Dashboard2 />, // Dashboard2 == search and browse; Manage guest search and browse vs logged in search and browse
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
