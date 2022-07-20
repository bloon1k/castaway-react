import React from 'react'
// Styles
import './Form-styles.scss'
// UI components
import Button from '../UI/Button/Button'
// Libraries
import axios from 'axios'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
// Assets
import sparks from '../../Assets/sparks2.svg'

const schema = yup.object().shape({
    name: yup.string().min(4, 'Name should be longer than 4 characters').max(20).required(),
    email: yup.string().email().required('Valid email is required')
})

const Form = () => {


    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)
    })

    async function postData(data) {
        await axios.post('https://jsonplaceholder.typicode.com/todos/', {
            name: data.name,
            email: data.email,
        })
            // need to activate popup on .then instead of console.log
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    const submitForm = (data) => {
        console.log(data)
        postData(data)
            .then(() => {
                document.getElementsByClassName('form__popup')[0].style.display = 'flex'
                setTimeout(() => {
                    document.getElementsByClassName('form__popup')[0].classList.add('move')
                }, 500)
                setTimeout(() => {
                    document.getElementsByClassName('form__popup')[0].classList.remove('move')
                }, 4000)
                setTimeout(() => {
                    document.getElementsByClassName('form__popup')[0].style.display = 'none'
                }, 5000)
            })
            .catch(error => console.log(error.message))
        reset()
    }

    return (
        <section className="form">

            <div className="form__popup">
                Success!
            </div>

            <div className="form__container">
                <div className="form__title-wrapper">
                    <p className="form__text">
                        Email Newsletter
                    </p>
                    <h2 className="form__title">
                        Subscribe for updates
                    </h2>
                    <img src={sparks} alt="sparks" className={'form__sparks'}/>
                </div>

                <form className="form__inputs" onSubmit={handleSubmit(submitForm)}>
                    <div className="form__input-wrapper">
                        <input
                            type="text"
                            name="name"
                            id="form__name"
                            className={'input'}
                            placeholder={'Name'}
                            {...register('name')}
                        />
                        {errors.name && <p className={'form__error'}>{errors.name.message}</p>}
                    </div>
                    <div className="form__input-wrapper">
                        <input
                            type="text"
                            name="email"
                            id="form__email"
                            className={'input'}
                            placeholder={'Email'}
                            {...register('email')}
                        />
                        {errors.email && <p className={'form__error'}>{errors.email.message}</p>}
                    </div>
                    <Button props={{className: 'form__button', type: 'submit'}} text={'Submit'}/>
                </form>

            </div>
        </section>
    )
}

export default Form