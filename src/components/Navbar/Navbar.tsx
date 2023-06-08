// import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar(): JSX.Element {
    // const navigate = useNavigate();
    // function handlMainClick(): void {
    //     navigate('/');
    // }
    // function handlSandwichClick(): void {
    //     navigate('/sandwich');
    // }

    const getStatus = (navData:{isActive:boolean}):string => 
        navData.isActive ? styles.active : '';

    return (
        <nav>
            <ul className={styles.navBarList} >
                <li className={styles.item}>
                    <NavLink to="/" className={getStatus}>Home</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="capital" className={getStatus}>Find capital</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="counter" className={getStatus}>Open counter</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="sandwich" className={getStatus}>Create sandwich</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="gender" className={getStatus}>Identificate gender</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="user" className={getStatus}>User</NavLink>
                </li>
            </ul>

            {/* <button type="button" onClick={handlMainClick}>Main</button>
            <a href="/">Главная</a>
            <a href="/counter">Каунтер</a>
            <NavLink to="capital">Столица</NavLink>
            <button type="button" onClick={handlSandwichClick}>Sandwich</button>
            <Link to="gender">Определитель пола</Link> */}
        </nav>
    );
}
