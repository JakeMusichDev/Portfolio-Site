import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../utils/styles'
import '../../styles/index.css'

import HomeMenuSlider from '../home-components/HomeMenuSlider'
import HomeMenuSection from '../home-components/HomeMenuSection'

const items = ['contact', "development", "art"];

export default class HomeMenu extends Component {
  componentDidMount() {
    this.introAnimation()
  }

  render() {
    return (
      <div className={css(styles.homeMenuContainer)}>
        <div className={css(styles.menuTagContainer)}>
          {items.map( (item, index) =>
            <HomeMenuSection key={index} index={index} item={item} />
          )}
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
      left: '55vw',
      height: '80vh',
      width: '20vw',
    },
  },
  menuTagContainer: {
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:"Source Sans Pro",
    letterSpacing:"3px"
    // border:'1px solid pink'
  },
})
