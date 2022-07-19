import React, {useContext} from 'react'
// Styles
import './Stars-styles.scss'
// Libraries
import {clickHandler, hoverHandler} from './EventHandlers'
import {v4 as uuid} from 'uuid'
// Assets
import grayStar from "../../../Assets/star-gray.svg"
// Context
import {StarsContext} from '../../../Helper/Contexts/StarsContext'

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
    )
}

export default Stars