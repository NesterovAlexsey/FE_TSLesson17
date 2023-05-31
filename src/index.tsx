import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App'
import Counter from './components/Counter/Counter';
import Sandwich from './components/homework17/BurgerButton';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Sandwich />    
    <Counter />
    <App />
  </React.StrictMode>
);


