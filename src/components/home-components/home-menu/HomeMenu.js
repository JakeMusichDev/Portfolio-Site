import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../../utils/styles'

import HomeMenuSlider from './HomeMenuSlider'
import HomeMenuSection from './HomeMenuSection'

const items = ['contact', "development", "art"];

export default class HomeMenu extends Component {
  componentDidMount() {
    this.introAnimation()
  }

  componentWillReceiveProps(nextProps, prevState) {
    this.animateSection(nextProps.currentItem)
  }

  animateSection = (currentItem) => {
    console.log(currentItem);
    let el = document.getElementById(`menu-section-${currentItem}`)
    console.log(el);
    Anime({
      targets: `#menu-section-${currentItem}`,
      translateY:"100px",
      duration:100
    })
  }

  render() {
    return (
      <div className={css(styles.homeMenuContainer)}>
        <div className={css(styles.menuTagContainer)}>
          {
            items.map( (item) =>
              <HomeMenuSection item={item} /> 
            )
          }
        </div>
        <HomeMenuSlider />
      </div>
    )
  }

  introAnimation = () => {
    // const tl = Anime.timeline()
    // tl.add({
    //   targets: ['#'],
    // })
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
    // overflowY:'hidden',
    border:'1px solid pink'
  },
})
