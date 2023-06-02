import React from 'react';
import PirateCard from '../PirateCard/PirateCard';
import Pirate from '../../types/Pirate';
import Flower from '../../types/Flower';
import FlowerCard from '../FlowerCard/FlowerCard';

function Parent(): JSX.Element {
  const john: Pirate = {
    name: 'John',
    isDrunk: true,
    ship: 'Black pearl',
    numberOfLegs: 2
  };

  const kaktus: Flower = {
    color: "green",
    title: "Sweety",
    kind: "Cactaceae",
    price: 100,
  }

  return (
    <div>
      <FlowerCard flower={kaktus}/>
      <h2>Родительский компонент</h2>
      <PirateCard pirate={john} />
    </div>
  );
}

export default Parent;