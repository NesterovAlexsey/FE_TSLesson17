import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // <React.StrictMode>
  //   <Capital />
  //   <GenderIdentification />
  //   <Buttons />
  //   <Parent />
  //   <Instrument name="Gitara" dateOfCreation={1987} typeOfInstrument="струнный" />
  //   <Instrument name="Барабан" dateOfCreation={1600} typeOfInstrument="ударный" />
  //   <Instrument name="Скрипка" dateOfCreation={2022} typeOfInstrument="струнный" />
  //   <Car color="black" brand="BMW" />
  //   <Car color="yellow" brand="Ferrari" />
  //   <Car color="yellow" brand="Submmarine" />
  //   <Car color="grey" brand="Kia" />
  //   <Car color="red" brand="Lamborghini" />
  //   <Car color="violet" brand="Lada" />
  //   <Sandwich />
  //   <Counter />
  //   <App />
  // </React.StrictMode>
);
