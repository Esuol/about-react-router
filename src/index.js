import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import PostList from './component/PostList-a.js'
import Router from './router-f.js'

ReactDOM.render(<BrowserRouter><Router /></BrowserRouter> ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
