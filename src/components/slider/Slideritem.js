/**
 * Project:
 * URL:
 * parameter:
 * Created by Mr yang on 2017/6/13.
 */
import React,{Component} from 'react';
export default class Slideritem extends Component{
    render(){
        return (
            <li className="sider">
                <img src={this.props.src} alt=""/>
            </li>
        )
    }
}