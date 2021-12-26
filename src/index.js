import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import {HashRouter} from 'react-router-dom'


ReactDOM.render(
    <HashRouter>
        
<App/>
    </HashRouter>
,document.getElementById('root'))