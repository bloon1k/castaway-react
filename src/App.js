import React, {useState} from 'react';
import './styles/App.scss';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Posts from "./components/Posts/Posts";
import Bio from "./components/Bio/Bio";
import Form from "./components/Form/Form";
import Comments from "./components/Comments/Comments";
import CommentForm from "./components/CommentForm/CommentForm";
import Footer from "./components/Footer/Footer";
// Contexts
import {CommentsContext} from "./components/Comments/Contexts/CommentsContext";

// async function postData() {
//     await axios.post('https://jsonplaceholder.typicode.com/todos/', {
//         userId: '201',
//         title: 'My super title',
//         completed: true
//     })
//         .then(response => console.log(response))
//         .catch(error => console.log(error))
// }


// Easy
// Comment form padding
// 1. Padding on post item top bottom needs help
// 8. Edit readme.md
// 10. Comments seem too thick on the phone;
// 99. PLEASE ADAPT COMMENT FORM

// Medium
// 1. Fix form adaptive
// 2. Form submit action
// 19. Remember comments to localstorage

// Hard
// 3. Check all adaptive
// 4. Suggest post form popup create
// 16. Comment all code out
// 17. Comment imports
// 18. Refactor everything possible
// 11. Animate mobile burger

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
    );
}

export default App;
