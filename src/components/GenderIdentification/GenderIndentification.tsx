import React, { useEffect, useState } from 'react';
import style from "./Genderldentification.module.css";

function GenderIdentification() {
    const [firstName, setFirstName] = useState<string>("");
    const [gender, setGender] = useState<string>("");

    useEffect(() => {
        async function loadGender(): Promise<void> {
            const response = await fetch(`https://api.genderize.io?name=${firstName}`);
            const object = await response.json();
            // console.log(object); // {count: 14512, gender: 'female', name: 'sasha', probability: 0.52}
            setGender(object.gender);
        }
        console.log("use effect gender");
        loadGender();
    },[firstName]);

    return (
        <div className={style.genderBox}>
            <h2>Узнать пол</h2>
            <form action="">
                <label htmlFor=''>Введите свое имя</label>
                <input
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                />
            </form>
            <div>{gender}</div>
        </div>
    );
};

export default GenderIdentification;
