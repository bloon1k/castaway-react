import React from 'react'
// Styles
import './Bio-styles.scss'
// UI components
import Button from "../UI/Button/Button"

const Bio = () => {
    return (
        <section className={'bio'}>
            <div className="bio__content">
                <Button props={{className: 'bio__button'}} text={
                    // 'text' prop = Children of the button
                    <>
                        <div className="bio__placeholder">
                            {/*  Placeholder  */}
                        </div>
                        <span className="bio__placeholder">
                            Visit Jacob's website
                        </span>
                        <img src={require('../../Assets/arrow.png')} alt="arrow"/>
                    </>
                    // End of children
                }/>
                <p>Meet your host</p>
                <h2>Jacob Paulaner</h2>
                <div className="bio__text">
                    <p>
                        Jacob has a background in audio engineering, and has been podcasting since the early days.
                    </p>
                    <p>
                        He’s here to help you level up your game by sharing everything he’s learned along the way.
                    </p>
                </div>
            </div>
            <div className="bio__image-wrapper">
                <img src={require('../../Assets/jacob.png')} alt="Jacob" className={'bio__image'}/>
            </div>
        </section>
    )
}

export default Bio