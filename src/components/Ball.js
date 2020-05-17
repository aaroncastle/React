import React, {Component} from 'react';
import './Ball.css'

class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
      left: props.left || 0,
      top: props.top || 0,
      color: props.color || 'lightblue',
      xSpeed: props.xSpeed,
      ySpeed: props.ySpeed
    }
    const duration = 16;
    setInterval(_ => {
      const xDis = this.state.xSpeed * duration / 1000,
       yDis = this.state.ySpeed * duration / 1000;
      let newLeft = this.state.left + xDis,
       newTop = this.state.top + yDis;
      if (newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed
        })
      } else if (newLeft >= document.documentElement.clientWidth - this.state.width) {
        newLeft = document.documentElement.clientWidth - this.state.width;
        this.setState({
          xSpeed: -this.state.xSpeed
        })
      }
      if (newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed
        })
      } else if (newTop >= document.documentElement.clientHeight - this.state.height) {
        newTop = document.documentElement.clientHeight - this.state.height;
        this.setState({
          ySpeed: -this.state.ySpeed
        })
      }
      this.setState({
        left: newLeft,
        top: newTop
      })
    }, duration)
  }

  render() {
    return (
      <div className='ball' style={{
        width: this.state.width,
        height: this.state.height,
        left: this.state.left,
        top: this.state.top,
        backgroundColor: this.state.color,
        xSpeed: this.state.xSpeed,
        ySpeed: this.state.ySpeed
      }}>
      </div>
    );
  }
}

export default Ball;
