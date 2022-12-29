import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

let Navbar = () => {

    const select = (state) => state.isActive ? `${style.item} ${style.select}` : style.item;

    return(
        <nav className={style.nav}>
            <NavLink to="/" className={(state) => select(state)}>Главная</NavLink>
            <NavLink to="albums" className={(state) => select(state)}>Альбомы</NavLink>
            <NavLink to="about" className={(state) => select(state)}>О Сайте</NavLink>
            <NavLink to="authors" className={(state) => select(state)}>Авторы</NavLink>
        </nav>
    );
}

export default Navbar;