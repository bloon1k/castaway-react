import React, {useState} from 'react'
// Child components
import Comments from '../Comments/Comments'
import CommentForm from '../CommentForm/CommentForm'
// Contexts
import {CommentsContext} from '../../Helper/Contexts/CommentsContext'


const CommentsGeneral = () => {

    const [comments, setComments] = useState([])

    return (
        <CommentsContext.Provider value={{comments: comments, setComments: setComments}}>
            <Comments/>
            <CommentForm/>
        </CommentsContext.Provider>
    )
}

export default CommentsGeneral