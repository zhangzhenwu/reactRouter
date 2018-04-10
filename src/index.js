import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { HashRouter as Router, Route } from '../react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import News from '../components/News';
let Home = (props,context)=> {
    console.log(props)
    return  <div>首页</div>;
} 
// let News = () => <div>新闻</div>;
let About = () => <div>关于我们</div>;

ReactDOM.render(
    <App>
        <Route path='/home' component={Home}></Route>
        <Route path='/news' component={News}></Route>
        <Route path='/about' component={About}></Route>
    </App>,
    document.querySelector('#app')
)



