import React,{Component} from 'react';
import {HashRouter as Router,Link} from '../react-router-dom';
export default class App extends Component{
    render(){
        return (
            <Router>
                <div className="container">
                    <nav className='navbar navbar-default'>
                        <div className='container-fluid'>
                            <div className='nav-header'>
                                <div className='navbar-brand'>
                                    管理系统
                                </div>
                            </div>
                            <ul className='nav navbar-nav'>
                                <li>
                                    <Link to='/home'>首页</Link>
                                </li>
                                <li>
                                    <Link to='/news'>新闻管理</Link>
                                </li>
                                <li>
                                    <Link to='/about'>关于我们</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className='row'>
                        <div className='col-md-12'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}