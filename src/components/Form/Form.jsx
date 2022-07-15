import React from 'react'
import './Form-styles.scss'
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import {useForm} from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import sparks from '../../Assets/sparks2.svg'

const schema = yup.object().shape({
    name: yup.string().min(4, 'Name should be longer than 4 characters').max(20).required(),
    email: yup.string().email().required('Valid email is required')
})

const Form = () => {


    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)
    })


    const submitForm = (data) => {
        console.log(data)
        reset()
    }

    return (
        <section className="form">

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
                        <Input props={{
                            placeholder: 'Name',
                            id: 'form__name',
                            name: 'name',
                            reg: {...register('name')},
                        }}/>
                        {errors.name && <p className={'form__error'}>{errors.name.message}</p>}
                    </div>
                    <div className="form__input-wrapper">
                        <Input props={{
                            placeholder: 'Email',
                            id: 'form__email',
                            name: 'email',
                            reg: {...register('email')},
                        }}/>
                        {errors.email && <p className={'form__error'}>{errors.email.message}</p>}
                    </div>
                    <Button props={{className: 'form__button', type: 'submit'}} text={'Submit'}/>
                </form>

            </div>
        </section>
    );
};

export default Form;