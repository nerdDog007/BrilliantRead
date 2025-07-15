// src/routes/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/landingPage/LandingPage';
import CreateAcc from '../pages/CreateAccount';
import Login from '../pages/LogIn';
import SignEmail from '../pages/SignEmail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <CreateAcc />
  },
  {
    path: '/signEmail',
    element: <SignEmail />
  }
]);

export default router;
