import React, { Component } from 'react';
import Link from '../react-router-dom/Link';
import Route from '../react-router-dom/Route';

export default class NewsList extends Component {
    constructor() {
        super();
        this.state = { news: [] };
    }
    componentDidMount() {
        let newStr = localStorage.getItem('news');
        let newsL = newStr ? JSON.parse(newStr) : [];
        this.setState({ news: newsL });
    }
    render() {
        return (
            <ul className='list-group'>
                {
                    this.state.news.map((item, index) => (
                        <li key={index} className="list-group-item">
                            {item.newName}
                        </li>
                    ))
                }
            </ul>
        )
    }
}