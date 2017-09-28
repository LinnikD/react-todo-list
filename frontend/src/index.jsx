import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';


const MESSAGE = "MaMessage";


ReactDOM.render(
    <App message={MESSAGE}>asd</App>,
    document.getElementById('root'),
);
