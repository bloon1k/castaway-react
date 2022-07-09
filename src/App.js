import React from 'react';
import './styles/App.scss';
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";

function App() {

  return (
    <div className="App">
        <div className="container">
            <Nav/>
            <Hero/>
        </div>
    </div>
  );
}

export default App;
