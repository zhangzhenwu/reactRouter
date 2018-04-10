import React, { Component } from 'react';
import Link from '../react-router-dom/Link';
import Route from '../react-router-dom/Route';
export default class NewsAdd extends Component {
    handelSubmit = (event) => {
        event.preventDefault();
        let newName = this.newsname.value;
        let news = { id: Date.now(), newName };
        let newStr = localStorage.getItem('news');
        let newsL = newStr ? JSON.parse(newStr) : [];
        newsL.push(news);
        localStorage.setItem('news', JSON.stringify(newsL));
        this.props.history.push('/news/list');
    }
    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <div className='form-group'>
                    <label>新闻名</label>
                    <input ref={input => this.newsname = input} className='form-control' />
                </div>
                <div className='form-group'>
                    <input type='submit' className='btn btn-primary' />
                </div>
            </form>
        )
    }
}
