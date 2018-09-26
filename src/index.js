import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const getCurrentDate = () =>{
    const date = new Date();
    return date.toDateString();
}

//const greeting = React.createElement('h1',{}, 'Olá Mundo');
//const greeting = <h1>Alô Mundo! Hoje é dia {getCurrentDate()}</h1>

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
