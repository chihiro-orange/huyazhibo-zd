import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import 'antd/dist/antd.css'
import './common/window.scss'
import Html from './html'
ReactDOM.render(<BrowserRouter><Html /></BrowserRouter>, document.getElementById('root'));
