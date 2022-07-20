import React from 'react'
// Styles
import './Comments-item-styles.scss'
// Assets
import star from '../../Assets/star.svg'
import starGray from '../../Assets/star-gray.svg'
// Libraries
import {v4 as uuid} from 'uuid'

const CommentsItem = ({data}) => {

    let starsCount = []
    // Create an array of wanted length, so I can .map it and render yellow stars
    for (let i = 0; i < data.stars; i++) {
        starsCount.push(1)
    }
    // Create an array of wanted length, so I can .map it and render gray stars
    let noStarsCount = []
    for (let i = 0; i < 5 - starsCount.length; i++) {
        noStarsCount.push(1)
    }

    // Shorten the comment body received from API to 100 chars
    if ([...data.body].length > 100) {
        let newBody = [...data.body]
        newBody.length = 100
        data.body = newBody.join('')
    }

    return (
        <div className={'comments-item'}>
            <div className="comments-item__stars">
                {starsCount.map(() => {
                    return <img src={star} alt="star" key={uuid()}/>
                })}
                {noStarsCount.map(() => {
                    return <img src={starGray} alt="gray star" key={uuid()}/>
                })}
            </div>
            <div className="comments-item__body">
                {data.body}
            </div>
            <div className="comments-item__email">
                {data.email}
            </div>
        </div>
    )
}

export default CommentsItem