import React,{Component} from "react";
import PropTypes from 'prop-types';
export default class Route extends Component{
    static contextTypes = {
        location: PropTypes.object
    }
    render(){
        // console.log(this.props)
        let {path,component:Component} = this.props;
        let {location:{pathname}} = this.context;
        if(path == pathname || pathname.startsWith(path)){
            return <Component location={this.context.location}/>;
        }
        return null;
    }
}