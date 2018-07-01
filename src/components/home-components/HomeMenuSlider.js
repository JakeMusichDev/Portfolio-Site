import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'

import ellipse from '../../../assets/home/Ellipse.svg'

export default class HomeMenu extends Component {
  componentDidMount() {
    this.animateSliderCircle()
  }

  animateSliderCircle = () => {
    Anime({
      targets: ['#slider-circle, path'],
      duration: 600,
      easing: 'easeInSine',
      strokeDashoffset: [Anime.setDashoffset, 0],
      delay: '800',
    })
  }

  render() {
    const {currentItem} = this.props
    return (
      <div className={css(styles.homeMenuSliderContainer)}>
        <div className={css(styles.sliderCircle)}>
          <svg id='slider-circle' width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25Z" transform="translate(1 0.5)" stroke="#F2F2F2"/>
          </svg> 
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  homeMenuSliderContainer: {
    // border:'1px solid orange',
    height: '100%',
    width: '100%',
    gridColumnStart: '5',
    gridColumnEnd: '6',
    gridRowStart: '5',
    gridRowEnd: '6',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderCircle: {
    color: 'white',
    // position: 'relative',
    width: '52px',
    // border: '1px solid pink',
    // display:'flex'
  },
})
