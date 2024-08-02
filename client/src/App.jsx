import React from 'react';
import { Routes, Route } from 'react-router-dom';

// <-- Importamos los componentes -->
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
      </Routes>
    </div>
  )
};

export default App;