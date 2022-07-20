import React, {useEffect, useState} from 'react'
// Styles
import './Posts-styles.scss'
// Libraries
import axios from 'axios'
import {v4 as uuid} from 'uuid'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
// Children components
import PostItem from './Post-item'
// UI components
import Button from '../UI/Button/Button'

const schema = yup.object().shape({
    title: yup.string().min(10).max(34).required(),
    body: yup.string().min(10).max(150).required(),
})

const Posts = () => {

    const [posts, setPosts] = useState([])

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

    function onSubmit(data) {
        console.log(data)
        postData(data)
            .then(() => {
                document.getElementsByClassName('form__popup')[0].style.display = 'flex'
                setTimeout(() => {
                    document.getElementsByClassName('form__popup')[0].classList.add('move')
                }, 500)
                setTimeout(() => {
                    document.getElementsByClassName('form__popup')[0].classList.remove('move')
                }, 4005)
                setTimeout(() => {
                    document.getElementsByClassName('form__popup')[0].style.display = 'none'
                }, 5000)
            })
            .catch(error => console.log(error.message))
        reset()
    }

    useEffect(() => {
        // Getting 3 posts just for an example
        async function getData(url) {
            await axios.get(url)
                .then(response => setPosts(response.data))
                .catch(error => console.error(error.message))
        }

        getData('https://jsonplaceholder.typicode.com/posts/')
            .then(() => console.log('request for posts sent'))
    }, [])

    function showSuggestPostWindow() {
        document.getElementsByClassName('posts__suggest-window')[0].style.display = 'flex'
        document.body.classList.add('stop-scrolling')
    }

    function hideSuggestPostWindow() {
        document.getElementsByClassName('posts__suggest-window')[0].style.display = 'none'
        document.body.classList.remove('stop-scrolling')
        reset()
    }

    return (
        <section className={'posts'}>

            <div className="posts__suggest-window" onClick={hideSuggestPostWindow}>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={'posts__suggest-window-form'}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2>Suggest a post</h2>

                    <div className="posts__suggest-window-title-wrapper">

                        <input
                            type="text"
                            name="title"
                            className={'posts__suggest-window-title'}
                            placeholder={'Title'}
                            {...register('title')}
                        />
                        {errors.title && <p className={'posts__suggest-window-error'}>{errors.title.message}</p>}

                    </div>
                    <div className="posts__suggest-window-body-wrapper">

                        <input
                            type="text"
                            name="body"
                            className={'posts__suggest-window-body'}
                            placeholder={'Body'}
                            {...register('body')}
                        />
                        {errors.body && <p className={'posts__suggest-window-error'}>{errors.body.message}</p>}

                    </div>
                    <Button
                        text={'Suggest a post'}
                        props={{
                            className: 'posts__suggest-window-submit',
                        }}
                    />
                </form>

            </div>

            <div className="posts__header">
                <h2>Latest posts</h2>
                <Button
                    props={{className: 'posts__button-suggest', onClick: showSuggestPostWindow}}
                    text={'Suggest a post'}
                />
            </div>
            <div className="posts__content">
                {posts.map(post => {
                    if (post.id < 4) {
                        return <PostItem props={post} key={uuid()}/>
                    } else {
                        return null
                    }
                })}
            </div>
        </section>
    )
}

export default Posts