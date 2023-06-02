import React from 'react';
import Flower from '../../types/Flower';

interface someProps {
    flower : Flower;
}

function FlowerCard ({ flower }:someProps):JSX.Element {
    const {
        color, title, kind, price,
    } = flower;
    return (
    <div style={{ backgroundColor: color }}>
        <h4>Flower</h4>
        <p>{color} {title} {kind} {price}</p>
    </div>
    );
}

export default FlowerCard;