import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/img/logo.png'

let Header = (prop) => {
    return(
        <section className={style.header}>
            <a href="" className={style.logo}>
                <img src={logo} alt="logo" />
                <span>{prop.name_site}</span>
            </a>
        </section>
    );
}

export default Header;