import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'

import ellipse from '../../../assets/home/Ellipse.svg'

export default class HomeMenu extends Component {
  componentDidMount() {
    const tl = Anime.timeline()
    tl
      .add({
        targets: ['#slider-line'],
        width: '0vw',
        duration: 0,
      })
      .add({
        targets: ['#slider-line'],
        width: '30vw',
        duration: 600,
        easing: 'easeInSine',
        delay: '800',
      })
  }

  animateSliderCircle = () => {
    
  }

  render() {
    const {currentItem} = this.props
    return (
      <div className={css(styles.homeMenuSliderContainer)}>
        <div className={css(styles.sliderCircle)}>
          <img src={ellipse} alt="circle" />
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  homeMenuSliderContainer: {
    border:'1px solid orange',
    height: '10vh',
  },
  slderRect: {
    height: '575.5px',
    width: '0.5',
  },
  sliderCircle: {
    color: 'white',
    position: 'relative',
    // transform:'translateX(10vw)',
    border: '1px solid pink',
    width: 'auto',
  },
})
