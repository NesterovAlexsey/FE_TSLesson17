import React, { useState } from 'react';

function Counter(): JSX.Element {
    const [count, setCount] = useState<number>(0);
    function handlePlusClick(): void {
        setCount(count + 1);
    }
    return (
        <>
            <h2>Counter</h2>
            <button type="button" onClick={handlePlusClick}> </button>
            <span>{count}</span>
        </>
    );
}

export default Counter;
