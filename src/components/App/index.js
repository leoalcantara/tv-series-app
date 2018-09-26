import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';
import Series from '../../containers/Series';
import 'whatwg-fetch';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Lista de Séries de TV</h1>
        </header>
        <Intro message='Aqui você encontrará suas séries favoritas'/>
        
        <Series/>
      </div>
    );
  }
}

export default App;
