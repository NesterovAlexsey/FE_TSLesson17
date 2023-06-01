import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import Counter from './components/Counter/Counter';
import Sandwich from './components/homework17/BurgerButton';
import Car from './components/Car/Car';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
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
