import React from 'react';
import './Nav-styles.scss'
import logo from '../../Assets/logo.svg'

const Nav = () => {
    return (
        <section className={'head'}>
            <img src={logo} alt="Castaway Logo" className={'head__logo'}/>
            <nav className="head__nav">
                <ul className="head__ul">
                    <a href={'#root'}><li>Home</li></a>
                    <a href={'#root'}><li>Episodes</li></a>
                    <a href={'#root'}><li>About</li></a>
                    <a href={'#root'}><li>Contact</li></a>
                </ul>
            </nav>
            <div className={'head__burger'}>Burger</div>
        </section>
    );
};

export default Nav;