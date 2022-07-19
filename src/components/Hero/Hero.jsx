import React from 'react'
// Styles
import './Hero-styles.scss'
// Assets
import spotify from '../../Assets/spotify.svg'
import circle from '../../Assets/circle.svg'
import soundcloud from '../../Assets/soundcloud.svg'
import podcasts from '../../Assets/podcasts.svg'
import radio from '../../Assets/radio.svg'
import sparks from '../../Assets/sparks.svg'
import underline from '../../Assets/underline.svg'

const Hero = () => {
    return (
        <section className={'hero'}>
            <div className="hero__image-wrapper">
                <img src={sparks} alt="sparks" className={'hero__image-sparks'}/>
                <img src={require('../../Assets/person.png')} alt="broadcaster" className={'hero__image'}/>
            </div>
            <div className="hero__content">
                <h1 className={'hero__title'}>
                    <span>
                        Take your <br/>
                        podcast to the <br/>
                        next
                    </span>
                    <img src={underline} alt="underline" className={'hero__title-line'}/>
                    <strong> level</strong>
                </h1>
                <div className="hero__music-wrapper">
                    <div className="hero__music">
                        <div className="hero__text-wrapper">
                            <p className="hero__text">Listen on</p>
                            <div className="hero__placeholder">
                                {/*  Placeholder  */}
                            </div>
                        </div>
                        <div className="hero__icons-wrapper">
                            <ul className={'hero__icons'}>
                                <li><img src={spotify} alt="spotify"/></li>
                                <li><img src={circle} alt="circle"/></li>
                                <li><img src={soundcloud} alt="soundcloud"/></li>
                                <li><img src={podcasts} alt="podcasts"/></li>
                                <li><img src={radio} alt="radio"/></li>
                            </ul>
                            <div className="hero__placeholder">
                                {/*  Placeholder  */}
                            </div>
                        </div>
                    </div>
                    <div className="hero__placeholder">
                        {/*  Placeholder  */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero