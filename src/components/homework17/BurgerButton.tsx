// Задание 1
// Создайте компонент Sandwich с кнопками добавить хлеб, добавить колбасу, добавить сыр.
// Пусть в этом компоненте будет текстовое поле.
// Например, если нажать на кнопки в такой последовательности:

// добавить хлеб -> добавить сыр -> добавить колбасу -> добавить хлеб.
// То внутри элемента должна появиться надпись: "Бутерброд: хлеб сыр колбаса хлеб".
import React, { useState } from 'react';

function Sandwich(): JSX.Element {
    const [count, setCount] = useState<string>("");

    function handlePlusClick(): void {
        setCount(count + 1);
    }
    return (
        <>
            <h2>Sandwich</h2>
            <button type="button" onClick={handlePlusClick}>Add bread</button>
            <button type="button" onClick={handlePlusClick}>Add sausage</button>
            <button type="button" onClick={handlePlusClick}>Add cheese</button>
            <span> Бутерброд: {count} </span>
        </>
    );
}

export default Sandwich;