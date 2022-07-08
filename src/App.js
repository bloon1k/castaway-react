import React, {useState} from 'react';
import './styles/App.scss';
import Nav from "./components/nav/Nav";

function App() {

  return (
    <div className="App">
        <div className="container">
            <Nav/>
        </div>
    </div>
  );
}

export default App;
