import React, {useState} from 'react'
// Styles
import './Header-styles.scss'
import './Burger-menu-styles.scss'
// Assets
import logo from '../../Assets/logo.svg'

const Header = () => {

    const [move, setMove] = useState(false)

    function clickHandler() {
        const menu = document.getElementsByClassName('head__menu')[0]
        const burger = document.getElementsByClassName('head__burger')[0]
        const ul = document.getElementsByClassName('head__menu-ul')[0]
        menu.style.display === 'flex' ? burger.style.opacity = 1 : burger.style.opacity = 0
        menu.style.display === 'flex' ? menu.style.display = 'none' : menu.style.display = 'flex'
        if (!move) {
            setTimeout(() => ul.style.left = '70%', 1)
            setMove(prevState => !prevState)
        } else {
            ul.style.left = '130%'
            setMove(prevState => !prevState)
        }
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
                        onClick={() => {
                            clickHandler()
                            document.body.classList.remove('stop-scrolling')
                        }}
                    />
                </div>
                <div className="head__menu-wrapper2">
                    <div className="head__placeholder">
                        {/*  Placeholder  */}
                    </div>
                    <ul className="head__menu-ul">
                        <li><a href={'#root'}>Home</a></li>
                        <li><a href={'#root'}>Episodes</a></li>
                        <li><a href={'#root'}>About</a></li>
                        <li><a href={'#root'}>Content</a></li>
                    </ul>
                </div>
            </div>
            <img src={logo} alt="Castaway Logo" className={'head__logo'}/>
            <nav className="head__nav">
                <ul className="head__ul">
                    <li><a href={'#root'}>Home</a></li>
                    <li><a href={'#root'}>Episodes</a></li>
                    <li><a href={'#root'}>About</a></li>
                    <li><a href={'#root'}>Content</a></li>
                </ul>
            </nav>
            <img
                src={require('../../Assets/burger.png')}
                alt="burger"
                className={'head__burger'}
                onClick={() => {
                    clickHandler()
                    document.body.classList.add('stop-scrolling')
                }}
            />
        </section>
    )
}

export default Header