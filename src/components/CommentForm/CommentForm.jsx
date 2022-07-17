import React, {useEffect} from 'react'
import './CommentForm-styles.scss'
import {v4 as uuid} from 'uuid'
// UI components
import Button from "../UI/Button/Button"
// React Hook Form
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from 'yup'
// Images SVG
// import star from '../../Assets/star.svg'
// import middleStar from '../../Assets/middleStar.svg'
import grayStar from '../../Assets/star-gray.svg'
// Event handlers
import {hoverHandler, clickHandler} from "./EventHandlers";

const schema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Please enter an email'),
    comment: yup.string().min(20, 'At least 20 characters').max(100, 'No longer than 100 characters').required('Please enter a comment'),
    // stars: yup.string().required('Please rate 1-5 stars'),
})


const stars = [1, 2, 3, 4, 5]

const CommentForm = () => {

    useEffect(() => {
        console.log('render')
    }, [])

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema),
    })

    function onSubmit(data) {
        console.log('success', data)
        reset()
    }

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

                <form className="comment-form__inputs" onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>

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


                    {/*Hidden input, whose value corresponds with chosen amount of stars, added to gather form data*/}
                    <input
                        type="number"
                        id={'num-inp'}
                        style={{opacity: '0', position: "absolute", left: '-100%'}}
                    />
                    {errors.stars && <p className={'comment-form__error2'}>{errors.stars.message}</p>}


                    <div className="comment-form__email-wrapper">

                        <input
                            type="text"
                            name="email"
                            className={'comment-form__email input'}
                            placeholder={'Email'}
                            autoComplete="off"
                            {...register('email')}
                        />
                        {errors.email && <p className={'comment-form__error'}>{errors.email.message}</p>}

                    </div>

                    <div className="comment-form__comment-wrapper">

                        <input
                            type="text"
                            name="comment"
                            className={'comment-form__comment input'}
                            placeholder={'Comment'}
                            autoComplete="off"
                            {...register('comment')}
                        />
                        {errors.comment && <p className={'comment-form__error'}>{errors.comment.message}</p>}

                    </div>

                    <Button
                        props={{
                            className: 'comment-form__submit',
                        }}
                        text={'Submit'}
                    />
                </form>

            </div>

        </section>
    );
};

export default CommentForm;