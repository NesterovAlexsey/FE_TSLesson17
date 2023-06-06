import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Counter from '../Counter/Counter';
import Capital from '../Capital/Capital';
import HomePage from '../HomePage/HomePage';
import BurgerButton from '../homework17/BurgerButton';
import GenderIdentification from '../GenderIdentification/GenderIndentification';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="counter" element={<Counter />}></Route>
        <Route path="capital" element={<Capital />}></Route>
        <Route path="/sandwich" element={<BurgerButton />} />
        <Route path="/gender" element={<GenderIdentification />} />
        <Route path="/" element={<HomePage />}></Route>
        //* - for all the other
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
