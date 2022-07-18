import React, {useEffect, useContext} from 'react'
import axios from 'axios'
import {v4 as uuid} from 'uuid'
import CommentsItem from "./Comments-item"
import './Comments-styles.scss'
// Context
import {CommentsContext} from "./Contexts/CommentsContext";

const Comments = () => {

    const {comments, setComments} = useContext(CommentsContext)

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

    // let reverseArray = comments.map((value, index, array) => array[array.length - 1 - index])

    return (
        <section className="comments">
            {comments.map((comment, index) => {
                if (index < 6) {
                    return <CommentsItem data={comment} key={uuid()}/>
                } else {
                    return null
                }
            })}
        </section>
    );
};

export default Comments;