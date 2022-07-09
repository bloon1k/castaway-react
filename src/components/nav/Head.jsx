import React from 'react';
import './Head-styles.scss'
import './Burger-menu-styles.scss'
import logo from '../../Assets/logo.svg'

const Head = () => {

    function clickHandler() {
        const menu = document.getElementsByClassName('head__menu')[0]
        const burger = document.getElementsByClassName('head__burger')[0]
        menu.style.display === 'flex' ? burger.style.opacity = 1 : burger.style.opacity = 0
        menu.style.display === 'flex' ? menu.style.display = 'none' : menu.style.display = 'flex'
    }

    return (
        <section className={'head'}>
            <div className="head__menu">
                <div className="head__menu-wrapper">
                    <div className="head__placeholder">
                        {/*  Placeholder  */}
                    </div>
                    <img
                        src={require('../../Assets/cross.png')}
                        alt="cross"
                        className={'head__menu-close'}
                        onClick={clickHandler}
                    />
                </div>
                <div className="head__menu-wrapper2">
                    <div className="head__placeholder">
                        {/*  Placeholder  */}
                    </div>
                    <ul className="head__menu-ul">
                        <a href={'#root'}><li>Home</li></a>
                        <a href={'#root'}><li>Episodes</li></a>
                        <a href={'#root'}><li>About</li></a>
                        <a href={'#root'}><li>Contact</li></a>
                    </ul>
                </div>
            </div>
            <img src={logo} alt="Castaway Logo" className={'head__logo'}/>
            <nav className="head__nav">
                <ul className="head__ul">
                    <a href={'#root'}><li>Home</li></a>
                    <a href={'#root'}><li>Episodes</li></a>
                    <a href={'#root'}><li>About</li></a>
                    <a href={'#root'}><li>Contact</li></a>
                </ul>
            </nav>
            <img
                src={require('../../Assets/burger.png')}
                alt="burger"
                className={'head__burger'}
                onClick={clickHandler}
            />
        </section>
    );
};

export default Head;