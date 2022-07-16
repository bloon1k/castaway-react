import React from 'react'
import './CommentForm-styles.scss'
import Input from "../UI/Input/Input"
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import Button from "../UI/Button/Button"
import star from '../../Assets/star.svg'
import grayStar from '../../Assets/star-gray.svg'
import {v4 as uuid} from 'uuid'

const schema = yup.object().shape({
    body: yup.string().min(20).max(100).required(),
    email: yup.string().email().required(),
})

function hoverHandler(e) {
    document.getElementById(e.target.id).src = star
}

function hoverOutHandler(e) {
    document.getElementById(e.target.id).src = grayStar
}

const stars = [1, 2, 3, 4, 5]

const CommentForm = () => {
    return (
        <section className="comment-form">

            <div className="comment-form__wrapper">

                <div className="comment-form__text">
                    <div className="comment-form__question">
                        Have anything to share?
                    </div>
                    <div className="comment-form__title">
                        Leave a comment!
                    </div>
                </div>

                <form className="comment-form__inputs">
                    <div className="comment-form__stars">
                        {stars.map(num => {
                            return (
                                <img
                                    // onMouseOver={hoverHandler}
                                    // onMouseOut={hoverOutHandler}
                                    src={grayStar}
                                    alt="grayStar"
                                    className={`comment-form__star${num}`}
                                    // id={`star${num}`}
                                    key={uuid()}
                                />
                            )
                        })}
                    </div>
                    <Input props={{
                        placeholder: 'Email',
                    }}/>
                    <Input props={{
                        placeholder: 'Comment',
                    }}/>
                    <Button props={{
                        className: 'comment-form__submit',
                    }} text={'Submit'}/>
                </form>

            </div>

        </section>
    );
};

export default CommentForm;