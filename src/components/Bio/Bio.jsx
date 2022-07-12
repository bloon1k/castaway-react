import React from 'react'
import './Bio-styles.scss'
import arrow from '../../Assets/arrow.svg'

const Bio = () => {
    return (
        <section className={'bio'}>
            <div className="bio__content">
                <img src={arrow} alt="arrow"/>
            </div>
            <img src={require('../../Assets/jacob.png')} alt="Jacob" className={'bio__image'}/>
        </section>
    );
};

export default Bio;