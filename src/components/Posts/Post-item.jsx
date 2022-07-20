import React from 'react'
// Styles
import './Post-item-styles.scss'
// UI components
import Button from '../UI/Button/Button'

const PostItem = ({props}) => {

    // Shorten the post title received from API to 34 chars
    if ([...props.title].length > 34) {
        let newTitle = [...props.title]
        newTitle.length = 34
        props.title = newTitle.join('')
    }

    // Shorten the post body received from API to 150 chars
    if ([...props.body].length > 150) {
        let newBody = [...props.body]
        newBody.length = 150
        props.body = newBody.join('')
    }

    return (
        <div className={'post-item'}>
            {/* Hard code post pictures to save appearance and as I'm not able to get them from json placeholder */}
            <div className="post-item__image-wrapper">
                <img src={require(`../../Assets/p${props.id}.png`)} alt="postImage" className={'post-item__image'}/>
            </div>
            <div className="post-item__content">
                <span className="post-item__number">
                    Post {props.id}
                </span>
                <h2 className="post-item__title">
                    {props.title}
                </h2>
                <p className="post-item__body">
                    {props.body}
                </p>
                <Button props={{className: 'post-item__button'}} text={'View post details'}/>
            </div>
        </div>
    )
}

export default PostItem