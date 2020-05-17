import React, {Component} from 'react';
import Random from '../util'
import Ball from "./Ball";
class BallControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: []
    }

   const timer = setInterval(_=>{
     const obj = {
       width: Random(30, 120),
       left: Random(30, document.documentElement.clientWidth - this.width),
       top: Random(20, document.documentElement.clientHeight - this.height),
       xSpeed: Random(20,400),
       ySpeed: Random(20, 400),
       color: `rgb(${Random(0,255)},${Random(0,255)},${Random(0, 255)})`
     }
       obj.height = obj.width;
     this.setState({
       balls: [...this.state.balls,obj]
     })
     if(this.state.balls.length === 10){
       clearInterval(timer);
     }
   },1000)
  }

  render() {
    const ballList = this.state.balls.map((item,index) =>{
      return <Ball key={index} {...item}/>
    })
    return (
      <>
        {ballList}
      </>
    );
  }
}

export default BallControl;
