import React from 'react';
import './styles/App.scss';
import Head from "./components/nav/Head";
import Hero from "./components/hero/Hero";
import Posts from "./components/Posts/Posts";
import axios from 'axios';

function App() {

    async function getData() {
        await axios.get('http://localhost:3001/')
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <div className="App" onResize={() => console.log('resize')}>
            <div className="container">
                <Head/>
                <Hero/>
                <Posts/>
                <button onClick={getData}>GET DATA</button>
            </div>
        </div>
    );
}

export default App;
