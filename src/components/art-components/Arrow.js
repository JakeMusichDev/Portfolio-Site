import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import VanillaTilt from 'vanilla-tilt'
import downArrow from '../../../assets/photography/down-arrow.svg'
import upArrow from '../../../assets/photography/up-arrow.svg'

export default class Arrow extends Component {
  constructor(props) {
    super(props)
    this.state = {tiltArray:[]}
  }

  componentDidMount() {
    // this.attachTilt()
    this.animateIn()
  }

  componentWillUnmount() {
    // this.destroyTilt()
  }
  render () {
    const {handleNextActiveItem, direction } = this.props
    const dirClass = direction === '+' ? 'up' : 'down'
    const directionArrowStyle = direction === '+' ? 
      css([styles.directionArrow, styles.up]) : 
      css([styles.directionArrow, styles.down])

    return (
      <div id={`directionArrow-${dirClass}`} className={directionArrowStyle} onClick={this.handleClick}>
        <img src={direction === '+' ? `${upArrow}` : `${downArrow}`} alt=""/>
      </div>
    )
  }

  handleClick = (e) => {
    const { handleNextActiveItem, direction } = this.props
    handleNextActiveItem(direction)
  }

  animateIn = () => {
    const { direction } = this.props
    const tl = Anime.timeline()
    const _this = this;
    console.log(direction);
    const dirClass = direction === '+' ? 'up' : 'down'
    
    tl.add({
        targets: `#directionArrow-${dirClass}`,
        duration: 0,
        opacity:[0],
        scale: '0.2'
      })
      .add({
        targets: `#directionArrow-${dirClass}`,
        opacity:[1],
        duration: 1000,
        easing: 'easeInQuint',
        // elasticity: 100,
      })
      // .add({
      //   targets: `#directionArrow-${dirClass}`,
      //   duration: 1000,
      //   loop: true,
      //   translateY: ["10%"],
      //   easing: 'easeInQuint',
      // })
  }

  attachTilt = () => {
    if( this.checkSize() ) {
    const { direction } = this.props
    const tiltArray = [];
    const paintingEl = document.getElementById(`directionArrow-${direction}`)
    const elements = []
    elements.push(paintingEl)
      
      for (var i = 0; i < elements.length; i++) {
        var elementToDestroy = elements[i];
        
        tiltArray.push(elementToDestroy)
        VanillaTilt.init(elements[i], {
          reverse: false,
          max: 50,
          perspective: 500,
          scale: 1.1,
          speed: 700,
          transition: true,
          axis: null,
          reset: true,
          // glare: true,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        });
      }
      this.setState({tiltArray})
    }
  }

  destroyTilt = () => {
    const {tiltArray} = this.state;
    if ( this.checkSize()) {
      for (var i = 0; i < tiltArray.length; i++) {
        if(tiltArray[i].vanillaTilt) {
          tiltArray[i].vanillaTilt.destroy();
        }
      }
    }
  }

  checkSize = () => {
    return window.innerWidth > 600;
  };
  
}

const styles = StyleSheet.create({
  directionArrow: {
    height: 'auto',
    width: 'auto',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // border: '1px solid pink',
    alignContent: 'center',
    transition: '0.4s all',
    opacity: '0.5',
      ":hover": {
      opacity: '1',
    }
  },
  up: {
    gridRow: '3/4',
    gridColumn: '1/2',
  },
  down: {
    gridRow: '4/5',
    gridColumn: '1/2',
  },
  arrow: {
    // border: '1px solid white',
    height: 'auto',
    width: 'auto',
  },
})

