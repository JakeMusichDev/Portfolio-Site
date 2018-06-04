import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'

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
    return (
      <div className={css(styles.homeMenuSliderContainer)}>
        <div className={css(styles.sliderCircle)}>
          <svg id="slider-circle" width="15" height="15" viewBox="0 0 30 30">
            <circle
              id="Ellipse"
              cx="10"
              cy="10"
              r="9"
              transform="matrix(-4.37114e-08 -1 1 -4.37114e-08 0 30)"
              fill="none"
              stroke="#F8F8F8"
              strokeWidth="1"
            />
          </svg>
        </div>
        <svg width="3" height="679" viewBox="0 0 3 679" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect id="Rectangle" x="0.5" y="0.5" width="2" height="678" transform="translate(3) scale(-1 1)" stroke="#F2F2F2"/>
        </svg>
        <div className={css(styles.sliderLine)}>
          <svg id="slider-line" width="200">
            <rect
              className={css(styles.slderRect)}
              id="Rectangle"
              width="0.5"
              transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"
              stroke="#F8F8F8"
              strokeWidth="0.5"
            />
          </svg>
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
    position: 'relative',
    // transform:'translateX(10vw)',
    border: '1px solid pink',
    width: 'auto',
  },
})
