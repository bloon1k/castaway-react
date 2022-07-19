import React, {useEffect, useState, useContext} from 'react'
// Styles
import './Posts-styles.scss'
// Libraries
import axios from "axios"
import {v4 as uuid} from 'uuid'
// Children components
import PostItem from './Post-item'
// UI components
import Button from "../UI/Button/Button"

const Posts = () => {

    const [posts, setPosts] = useState([])

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

    return (
        <section className={'posts'}>
            <div className="posts__header">
                <h2>Latest posts</h2>
                <Button props={{className: 'posts__button-suggest'}} text={'Suggest a post'}/>
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