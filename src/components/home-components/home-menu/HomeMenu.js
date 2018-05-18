import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../../utils/styles'

import HomeMenuSlider from './HomeMenuSlider'
import HomeMenuSection from './HomeMenuSection'

const items = ["development", "art", 'contact'];

export default class HomeMenu extends Component {
  componentDidMount() {
    // this.introAnimation()
  }

  componentWillReceiveProps(nextProps, prevState) {
    this.animateSection(nextProps)
  }

  animateSection = (nextProps) => {

    let currentSection = document.getElementById(`menu-section-${nextProps.currentItem}`)
    console.log(nextProps);

    Anime({
      targets: currentSection,
      translateY:`${nextProps.direction}100%`,
      duration:100
    })
  }

  render() {
    return (
      <div className={css(styles.homeMenuContainer)}>
        <div className={css(styles.menuTagContainer)}>
          {
            items.map( (item, index) =>
              <HomeMenuSection key={index} item={item} index={index} />
            )
          }
        </div>
        <HomeMenuSlider />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  homeMenuContainer: {
    position: 'absolute',
    top: '10vh',
    left: '55vw',
    height: '80vh',
    width: '30vw',
    // border:'1px solid blue',
    color: 'white',
    [breakPoints.tablet]: {
      left: '10vw',
      height: '80vh',
      width: '80vw',
    },
  },
  menuTagContainer: {
    height: '90%',
    fontFamily:"sans-serif",
    letterSpacing:"3px",
    overflowY:'hidden',
    // border:'1px solid pink'
  },
})
