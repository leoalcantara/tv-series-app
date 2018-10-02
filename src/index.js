import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

/*const getCurrentDate = () =>{
    const date = new Date();
    return date.toDateString();
}*/

ReactDOM.render(
        <BrowserRouter><App/></BrowserRouter>, 
        document.getElementById('root')
    );
registerServiceWorker();
