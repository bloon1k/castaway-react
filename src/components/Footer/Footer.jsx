import React from 'react'
// Styles
import './Footer-styles.scss'
// Assets
import logo from '../../Assets/logo.svg'
import instagram from '../../Assets/instagram.svg'
import twitter from '../../Assets/twitter.svg'
import facebook from '../../Assets/facebook.svg'
import spotify from '../../Assets/spotify.svg'
import circle from '../../Assets/circle.svg'
import soundcloud from '../../Assets/soundcloud.svg'
import podcasts from '../../Assets/podcasts.svg'
import radio from '../../Assets/radio.svg'

const Footer = () => {
    return (
        <section className="footer">

            <div className="footer__logo">
                <img src={logo} alt="castaway"/>
                <ul className="footer__media">
                    <li><img src={instagram} alt="instagram"/></li>
                    <li><img src={twitter} alt="twitter"/></li>
                    <li><img src={facebook} alt="facebook"/></li>
                </ul>
            </div>

            <div className="footer__links-wrapper">
                <ul className="footer__links">
                    <li><a href={'#root'}>Home</a></li>
                    <li><a href={'#root'}>About</a></li>
                    <li><a href={'#root'}>Episodes</a></li>
                    <li><a href={'#root'}>Contact</a></li>
                </ul>
                <ul className="footer__links2">
                    <li><a href={'#root'}>Style Guide</a></li>
                    <li><a href={'#root'}>Changelog</a></li>
                    <li><a href={'#root'}>Credit</a></li>
                    <li><a href={'#root'}>Powered by Web flow</a></li>
                    <li><a href={'#root'}>Licenses</a></li>
                </ul>
            </div>

            <ul className="footer__music">
                <li><img src={spotify} alt="spotify"/></li>
                <li><img src={circle} alt="circle"/></li>
                <li><img src={soundcloud} alt="soundcloud"/></li>
                <li><img src={podcasts} alt="podcasts"/></li>
                <li><img src={radio} alt="radio"/></li>
            </ul>

        </section>
    )
}

export default Footer