import React from 'react';
import './styles/App.scss';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Posts from "./components/Posts/Posts";
import Bio from "./components/Bio/Bio";
import Form from "./components/Form/Form";
import Comments from "./components/Comments/Comments";
// import axios from "axios";


// async function postData() {
//     await axios.post('https://jsonplaceholder.typicode.com/todos/', {
//         userId: '201',
//         title: 'My super title',
//         completed: true
//     })
//         .then(response => console.log(response))
//         .catch(error => console.log(error))
// }
//
// async function getData() {
//     await axios.get('https://jsonplaceholder.typicode.com/todos/201')
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


function App() {

    return (
        <div className="App" onResize={() => console.log('resize')}>
            <div className="container">
                <Header/>
                <Hero/>
                <Posts/>
                <Bio/>
                <Form/>
                <Comments/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    );
}

export default App;
