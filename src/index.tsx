import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import Counter from './components/Counter/Counter';
import Sandwich from './components/homework17/BurgerButton';
import Car from './components/Car/Car';
import Instrument from './components/Instrument/Instrument';
import Parent from './components/Parent/Parent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Parent />
    <Instrument name="Gitara" dateOfCreation={1987} typeOfInstrument="струнный" />
    <Instrument name="Барабан" dateOfCreation={1600} typeOfInstrument="ударный" />
    <Instrument name="Скрипка" dateOfCreation={2022} typeOfInstrument="струнный" />
    <Car color="black" brand="BMW" />
    <Car color="yellow" brand="Ferrari" />
    <Car color="yellow" brand="Submmarine" />
    <Car color="grey" brand="Kia" />
    <Car color="red" brand="Lamborghini" />
    <Car color="violet" brand="Lada" />
    <Sandwich />
    <Counter />
    <App />
  </React.StrictMode>
);
