
import React from 'react';
import { useEffect } from 'react';
import Context from './context/Context';
import LandingPage from './pages/landingPage/LandingPage';

function App() {

  return (
    <>
      <Context>
        <LandingPage />
      </Context>
    </>
  )
}

export default App
