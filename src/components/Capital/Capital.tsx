import React, { useEffect, useRef, useState } from 'react'

export default function Capital():JSX.Element {
    const [capitalName, setCapitalName] = useState<string>("");
    useEffect(() => {
        async function loadCapital():Promise<void> {
            const res = await fetch('https://restcountries.com/v3.1/capital/tallinn');
            const arr = await res.json();
            const [elem]=arr;
            const {capital} = elem;
            const [capitalStr] = capital;
            setCapitalName(capitalStr);
        }
        loadCapital()
    }, []);
    const inputElement = useRef<HTMLInputElement>(null);
    async function loadNewCapital():Promise<void> {
        const res = await fetch(`https://restcountries.com/v3.1/capital/${inputElement.current?.value}`);
        const arr = await res.json();
        const [elem]=arr;
        const {capital} = elem;
        const [capitalStr] = capital;
        setCapitalName(capitalStr);
    }

return (
    <>
        <div>Capital {capitalName}</div>
        <input ref={inputElement} type='text' placeholder='Enter the Main City:'/>
        <button type='button' onClick={()=>{loadNewCapital();}}>Find</button>
    </>
  )
}
