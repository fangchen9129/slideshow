/**
 * Project:
 * URL:
 * parameter:
 * Created by Mr yang on 2017/6/13.
 */
import React,{Component} from 'react';
export default class Focus extends Component{
    render(){
    var arr = this.props.images.filter((item,index)=>{
        return index!=(this.props.images.length-1)
    })
        return (
            <div className="focus-box">
                <ul className="focus-list">
                    {arr.map((item,index)=>{
                        if(this.props.index<arr.length){
                            return (
                                <li className={(this.props.index==index)?'active':''} onClick={()=>{this.props.goto(index)}} key={index}>
                                </li>
                            )
                        }else{
                            return (
                                <li className={(0==index)?'active':''} onClick={()=>{this.props.goto(index)}} key={index}>
                                </li>
                            )
                        }

                    })}
                </ul>
            </div>
        )
    }
}