import React, { useEffect, useState } from 'react';
import PirateCard from '../PirateCard/PirateCard';
import Pirate from '../../types/Pirate';
import Flower from '../../types/Flower';
import FlowerCard from '../FlowerCard/FlowerCard';
import GuestCard from '../GuestCard/GuestCard';

function Parent(): JSX.Element {
  const john: Pirate = {
    name: 'John',
    isDrunk: true,
    ship: 'Black pearl',
    numberOfLegs: 2
  };

  const [guest, setGuest] = useState<string>('Igor');

  const kaktus: Flower = {
    color: 'green',
    title: 'Sweety',
    kind: 'Cactaceae',
    price: 5,
  };

  const mikrofon: Flower = {
    color: 'lightcoral',
    title: 'Zingiber spectabile',
    kind: 'Zingiberaceae',
    price: 100,
  };

  return (
    <div>
      <FlowerCard flower={kaktus} />
      <FlowerCard flower={mikrofon} />
      <h2>Родительский компонент</h2>
      <GuestCard guest={guest} />
      <PirateCard pirate={john} />
    </div>
  );
}

export default Parent;
