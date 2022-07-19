import React, {useState} from 'react'
// Styles
import './styles/App.scss'
// Components
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Posts from "./components/Posts/Posts"
import Bio from "./components/Bio/Bio"
import Form from "./components/Form/Form"
import Comments from "./components/Comments/Comments"
import CommentForm from "./components/CommentForm/CommentForm"
import Footer from "./components/Footer/Footer"
// Contexts
import {CommentsContext} from "./Helper/Contexts/CommentsContext"

// Medium
// 1. Remember comments to localstorage - new

// Hard
// 2. Suggest post form popup create - new
// 3. Animate mobile burger - new

// Once ready
// 4. Refactor everything possible
// 5. Check all adaptive

function App() {

    const [comments, setComments] = useState([])

    return (
        <div className="App" onResize={() => console.log('resize')}>
            <div className="container">
                <Header/>
                <Hero/>
                <Posts/>
                <Bio/>
                <Form/>
                <CommentsContext.Provider value={{comments: comments, setComments: setComments}}>
                    <Comments/>
                    <CommentForm/>
                </CommentsContext.Provider>
                <Footer/>
            </div>
        </div>
    )
}

export default App
