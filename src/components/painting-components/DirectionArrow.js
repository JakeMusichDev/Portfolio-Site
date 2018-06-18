import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import VanillaTilt from 'vanilla-tilt'
import arrowLeft from '../../../assets/painting/next-arrow-left.svg'
import arrowRight from '../../../assets/painting/next-arrow-right.svg'

export default class DirectionArrow extends Component {
  constructor(props) {
    super(props)
    this.state = {tiltArray:[]}
  }

  componentDidMount() {
    this.attachTilt()
    // this.animateIn()
  }

  componentWillUnmount() {
    this.destroyTilt()
  }
  render () {
    const {handleNextActiveItem, direction } = this.props
    const directionArrowStyle = direction === '+' ? 
      css([styles.directionArrow, styles.left]) : 
      css([styles.directionArrow, styles.right])

    return (
      <div id={`directionArrow-${direction}`} className={directionArrowStyle} onClick={this.handleClick}>
        <img src={direction === '+' ? `${arrowLeft}` : `${arrowRight}`} alt=""/>
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
    // console.log(direction);
    
    tl.add({
        targets: `#directionArrow-${direction}`,
        duration: 0,
      })
      .add({
        targets: `#directionArrow-${direction}`,
        opacity:[0,1],
        duration: 1000,
        easing: 'easeInQuint',
        elasticity: 100,
        scale: 1.4,
        complete: () => _this.attachTilt()
      })
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
  left: {
    gridRow: '3/4',
    gridColumn: '1/2',
  },
  right: {
    gridRow: '3/4',
    gridColumn: '5/6',
  },
  arrow: {
    // border: '1px solid white',
    height: 'auto',
    width: 'auto',
  }
})

