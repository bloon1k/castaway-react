import React, {useEffect, useState} from 'react'
import './Posts-styles.scss'
import axios from "axios"
import {v4 as uuid} from 'uuid'
import PostItem from './Post-item'
import MyButton from "../UI/Button/MyButton";


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
    }, [])

    return (
        <section className={'posts'}>
            <div className="posts__header">
                <h2>Latest posts</h2>
                <MyButton props={{className: 'posts__button-suggest'}} text={'Suggest a post'}/>
            </div>
            <div className="posts__content">
                {posts.map(post => {
                    if (post.id < 4) {
                        return <PostItem props={post} key={uuid()}/>
                    } else {
                        return null;
                    }
                })}
            </div>
        </section>
    );
};

export default Posts;