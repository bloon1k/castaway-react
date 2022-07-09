import React from 'react';
import './styles/App.scss';
import Head from "./components/nav/Head";
import Hero from "./components/hero/Hero";

function App() {

  return (
    <div className="App" onResize={() => console.log('resize')}>
        <div className="container">
            <Head/>
            <Hero/>
        </div>
    </div>
  );
}

export default App;
