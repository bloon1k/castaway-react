import React, {useContext} from 'react'
import {clickHandler, hoverHandler} from './EventHandlers'
import grayStar from "../../../Assets/star-gray.svg"
import {v4 as uuid} from 'uuid'
import {StarsContext} from '../Contexts/StarsContext'
// Styles
import './Stars-styles.scss'

const Stars = () => {
    
    const {stars} = useContext(StarsContext)

    return (
        <div className="comment-form__stars">
            {stars.map(num => {
                return (
                    <img
                        onMouseOver={hoverHandler}
                        onClick={clickHandler}
                        src={grayStar}
                        alt="grayStar"
                        className={'comment-form__star'}
                        id={`star${num}`}
                        key={uuid()}
                    />
                )
            })}
        </div>
    );
};

export default Stars;