import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar(): JSX.Element {
    const navigate = useNavigate();
    function handlMainClick(): void {
        navigate('/');
    }
    function handlSandwichClick(): void {
        navigate('/sandwich');
    }
    
    return (
        <nav>
            <button type="button" onClick={handlMainClick}>Main</button>
            <a href="/">Главная</a>
            <a href="/counter">Каунтер</a>
            <NavLink to="capital">Столица</NavLink>
            <button type="button" onClick={handlSandwichClick}>Sandwich</button>
            <Link to="gender">Определитель пола</Link>
        </nav>
    );
}
