import React from 'react'
import './Post-item-styles.scss'
import Button from "../UI/Button/Button";

const PostItem = ({props}) => {
    return (
        <div className={'post-item'}>
            {/* Hard code pictures to save appearance of landing */}
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
    );
};

export default PostItem;