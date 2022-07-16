import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {v4 as uuid} from 'uuid'
import CommentsItem from "./Comments-item"
import './Comments-styles.scss'

const Comments = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        async function getComments(url) {
            await axios.get(url)
                .then(response => setComments(response.data.map(comment => {
                    // Generating random number from 1 to 5
                    let rating = Math.floor(Math.random() * 5) + 1;
                    // Adding amount of stars to the comment
                    return {...comment, stars: rating}
                })))
                .catch(error => console.log(error.message))
        }

        getComments('https://jsonplaceholder.typicode.com/comments')
            .then(() => console.log('request for comments sent'))
    }, [])

    return (
        <section className="comments">
            {comments.map(comment => {
                if (comment.id < 7) {
                    return <CommentsItem data={comment} key={uuid()}/>
                } else {
                    return null
                }
            })}
        </section>
    );
};

export default Comments;