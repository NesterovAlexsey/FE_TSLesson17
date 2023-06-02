import React from 'react';
import Flower from '../../types/Flower';

interface SomeProps {
    flower : Flower;
}

function FlowerCard({ flower }:SomeProps):JSX.Element {
    const {
        color, title, kind, price,
    } = flower;
    return (
    <div style={{ backgroundColor: color }}>
        <h4>Flower</h4>
        <p>Color: {color}</p>
        <p>Name: {title}</p>
        <p>Family: {kind}</p>
        <p>Price: {price} $</p>
    </div>
    );
}

export default FlowerCard;
