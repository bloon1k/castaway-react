import React from 'react'
// Styles
import './styles/App.scss'
// Components
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Posts from './components/Posts/Posts'
import Bio from './components/Bio/Bio'
import Form from './components/Form/Form'
import CommentsGeneral from './components/CommentsGeneral/CommentsGeneral'
import Footer from './components/Footer/Footer'

function App() {

    return (
        <div className="App" onResize={() => console.log('resize')}>
            <div className="container">
                <Header/>
                <Hero/>
                <Posts/>
                <Bio/>
                <Form/>
                <CommentsGeneral/>
                <Footer/>
            </div>
        </div>
    )
}

export default App
