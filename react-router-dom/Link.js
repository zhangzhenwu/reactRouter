import React,{Component} from 'react';
import ProTypes from 'prop-types';
export default class Link extends Component{
    static contextTypes = {
        history:ProTypes.object
    }
    render(){
        return (
            // <a href={"#"+this.props.to}>{this.props.children}</a>
            <a onClick={()=>this.context.history.push(this.props.to)}>{this.props.children}</a>
        )
    }
}