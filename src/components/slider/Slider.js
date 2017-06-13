/**
 * Project:
 * URL:
 * parameter:
 * Created by Mr yang on 2017/6/13.
 */
import React,{Component} from 'react';
import './slider.css'
import Slideritem from './Slideritem'
import Arrows from './Arrows'
import Focus from './Focus'
import Focusitem from "./Focusitem";
export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        }
    }
    go=(pageNum)=>{
        let length = this.props.images.length;
        if(typeof pageNum == 'number'){
           console.log('执行了')
            this.state.index = pageNum;
        }else{
            this.state.index++;
        }
        let imgbox = this.refs.imgbox;
        if(this.state.index>=length){
            imgbox.style.left ='0px'
            imgbox.style.transitionDuration = '0s'
            getComputedStyle(imgbox).left;
            imgbox.style.transitionDuration = '1s'
            this.setState({index:1})
        }else if(this.state.index<0){
            this.refs.imgbox.style.transitionDuration = '0s'
            this.refs.imgbox.style.left =(this.props.images.length-1)*(-800)+'px';
            getComputedStyle(imgbox).left;

               imgbox.style.transitionDuration = '1s'
               this.setState({index:(this.props.images.length-2)});


        }else{
            imgbox.style.transitionDuration = '1s'
            this.setState({index:this.state.index})
        }

    }
    goLeft=()=>{
        this.go(--this.state.index);
    }
    goRight=()=>{
        this.go(++this.state.index);
    }
    componentWillMount(){
        if(this.props.autoplay){
            this.timer = setInterval(this.go,2000)
        }

    }
    render(){
        return (
            <div className="slider-wrapper"
                 onMouseOver={this.props.paused?()=>{clearInterval(this.timer)}:()=>{}}
                 onMouseOut={this.props.paused?()=>{this.timer=setInterval(this.go,2000)}:()=>{}}
            >
                <ul className="sliders" style={{left:(-800)*this.state.index+'px'}} ref="imgbox">
                    {
                        this.props.images.map((item,index)=>{
                            return (
                                <Slideritem src={item.src} key={index}/>
                            )
                        })
                    }
                </ul>
                {
                    this.props.showArrow?<Arrows goLeft={this.goLeft} goRight={this.goRight}/>:null
                }
                {
                    this.props.showFocus?<Focus index={this.state.index} images={this.props.images} goto={(index)=>{this.go(index)}}/>:null
                }


            </div>
        )
    }
}