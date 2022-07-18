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

// 1. Fix form adaptive
// 2. Form submit action
// 3. Check all adaptive
// 4. Suggest post form popup create
// 5. View post details popup create
// 6. Burger and regular menu pages create
// 7. Do something about 1440+ header appearance
// 8. Edit readme.md
// 9. Form padding top-bottom so small on phone. Title as well
// 10. Comments seem too thick on the phone;
// 11. Burger looks not good, need to steal it somewhere
// 12. Remove posts hover effect on 768 -.
// 13. Header.jsx cannot contain A in the UL, need to wrap A with LI
// 14. Less gap between comments and upper form
// 15. align items center on Footer
// 16. Comment all code out
// 17. Comment imports
// 17. Refactor everything possible

// push new comment to comment with .unshift()

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
                <br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    );
}

export default App;
