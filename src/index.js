import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/slider/Slider';
const imageData = [
    {src:require('./components/slider/images/1.png'),alt:'png1'},
    {src:require('./components/slider/images/2.png'),alt:'png2'},
    {src:require('./components/slider/images/3.png'),alt:'png3'},
    {src:require('./components/slider/images/1.png'),alt:'png1'}
]
ReactDOM.render(
    <Slider images={imageData} autoplay={true} paused={true} showFocus={true} showArrow={true} duration={3}/>,
    document.querySelector('#root')
);