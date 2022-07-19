import React, {useContext} from 'react';
// UI components
import Button from "../../UI/Button/Button";
// React hook form and yup validation
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
// Context
import {StarsContext} from "../Contexts/StarsContext";
import {CommentsContext} from "../../Comments/Contexts/CommentsContext";
// Styles
import './Inputs-styles.scss'

const schema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Please enter an email'),
    comment: yup.string().min(20, 'At least 20 characters').max(100, 'No longer than 100 characters').required('Please enter a comment'),
})

const Inputs = () => {

    const {setStars} = useContext(StarsContext)
    const {comments, setComments} = useContext(CommentsContext)

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema),
    })

    function onSubmit(data) {
        let newComment = {
            stars: document.getElementById('comment-form__num-inp').value,
            body: data.comment,
            email: data.email,
        }

        setComments([newComment, ...comments])

        setStars([1, 2, 3, 4, 5])
        reset()
    }

    return (
        <form className="comment-form__inputs" onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>

            {/*Hidden input, whose value corresponds with chosen amount of stars, added to gather form data*/}
            <input
                type="number"
                id={'comment-form__num-inp'}
                defaultValue={0}
                style={{opacity: '0', position: "absolute", left: '-100%'}}
            />
            <p className={'comment-form__error2'}>Please rate 1-5 stars</p>


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
    );
};

export default Inputs;