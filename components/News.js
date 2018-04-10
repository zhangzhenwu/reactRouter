import React, { Component } from 'react';
import { Route, Link } from '../react-router-dom';
import NewsAdd from './NewsAdd';
import NewsList from './NewsList';
export default class News extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-2'>
                    <ul className='nav nav-pills nav-stacked'>
                        <li><Link to='/news/add'>添加新闻</Link></li>
                        <li><Link to='/news/list'>新闻列表</Link></li>
                    </ul>
                </div>
                <div className='col-md-10'>
                    <Route path='/news/add' component={NewsAdd}></Route>
                    <Route path='/news/list' component={NewsList}></Route>
                </div>
            </div>
        )
    }
}