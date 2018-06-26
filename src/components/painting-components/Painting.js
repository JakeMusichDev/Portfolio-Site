import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import VanillaTilt from 'vanilla-tilt'

export default class Painting extends Component {
  constructor(props) {
    super(props)
    this.state = {tiltArray:[]}
  }
  componentDidMount() {
    // this.animateIn()
  }

  componentWillUnmount() {
    this.destroyTilt()
  }

  render() {
    const { item } = this.props
    return (
      <img 
        id={`paintingView--painting-${item.key}`} 
        ref={ el => this.image = el } 
        className={css(styles.image)} 
        src={`${item.src}`} 
        alt="" 
      />
    )
  }

  animateIn = () => {
    const { item } = this.props
    const tl = Anime.timeline()
    const _this = this

    // tl.add({
    //     targets: `#paintingView--painting-${item.key}`,
    //     duration: 0,
    //   })
    //   .add({
    //     targets: `#paintingView--painting-${item.key}`,
    //     opacity:[0,1],
    //     duration: 500,
    //     easing: 'easeInQuint',
    //     elasticity: 100,
    //     scale: 1,
    //     complete: () => _this.attachTilt()
    //   })

      // Fire off intro animation
    // Anime.timeline().add({
    //     targets: this.image,
    //     opacity: [0, 1],
    //     translateX: ['100%', '0%'],
    //     elasticity: 0,
    //     easing: 'easeOutSine',
    //     duration: 1000,
    // }).add({
    //     targets: this.imageWrapper,
    //     offset: '-=1000',
    //     opacity: [0, 1],
    //     translateX: ['-100%', '0%'],
    //     elasticity: 0,
    //     easing: 'easeOutSine',
    //     duration: 1000
    // })
  }

  attachTilt = () => {
    if( this.checkSize() ) {
    const { item } = this.props
    const tiltArray = [];
    const paintingEl = document.getElementById(`paintingView--painting-${item.key}`)
    const elements = []
    elements.push(paintingEl)
      
      for (var i = 0; i < elements.length; i++) {
        var elementToDestroy = elements[i];
        
        tiltArray.push(elementToDestroy)
        VanillaTilt.init(elements[i], {
          reverse: false,
          max: 50,
          perspective: 1500,
          scale: 1,
          speed: 700,
          transition: true,
          axis: null,
          reset: true,
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
  image: {
    // marginTop: '10vh',
    height: '90vh',
    // width: 'auto',
  }
})

