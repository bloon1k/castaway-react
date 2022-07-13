import React from 'react';
import './styles/App.scss';
import Head from "./components/Head/Head";
import Hero from "./components/Hero/Hero";
import Posts from "./components/Posts/Posts";
import Bio from "./components/Bio/Bio";
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


function App() {

    return (
        <div className="App" onResize={() => console.log('resize')}>
            <div className="container">
                <Head/>
                <Hero/>
                <Posts/>
                <Bio/>
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    );
}

export default App;
