// Задание 1
// Создайте компонент Sandwich с кнопками добавить хлеб, добавить колбасу, добавить сыр.
// Пусть в этом компоненте будет текстовое поле.
// Например, если нажать на кнопки в такой последовательности:

// добавить хлеб -> добавить сыр -> добавить колбасу -> добавить хлеб.
// То внутри элемента должна появиться надпись: "Бутерброд: хлеб сыр колбаса хлеб".
import React, { useState } from 'react';

function Sandwich(): JSX.Element {
    const [food, setSandwich] = useState<string>("");

    function addBread(): void {
        setSandwich(food + " bread ");
    }

    function addSausedge(): void {
        setSandwich(food + " sausedge ");
    }

    function addcheese(): void {
        setSandwich(food + " cheese ");
    }

    return (
        <>
            <h2>Sandwich</h2>
            <button type="button" onClick={addBread}>Add bread</button>
            <button type="button" onClick={addSausedge}>Add sausage</button>
            <button type="button" onClick={addcheese}>Add cheese</button>
            <span> "Бутерброд: {food}". </span>
        </>
    );
}

export default Sandwich;