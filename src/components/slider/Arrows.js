/**
 * Project:
 * URL:
 * parameter:
 * Created by Mr yang on 2017/6/13.
 */
import React,{Component} from 'react';
export default class Arrows extends Component{
    render(){
        return (
            <div className="arrow-box">
                <a href="javascript:void(0)" className="arrow arrow-left" onClick={this.props.goLeft} >
                    {'<'}
                </a>
                <a href="javascript:void(0)" className="arrow arrow-right" onClick={this.props.goRight}>
                    {'>'}
                </a>
            </div>
        )
    }
}