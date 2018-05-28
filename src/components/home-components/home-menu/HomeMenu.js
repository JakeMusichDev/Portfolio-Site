import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../../utils/styles'

import HomeMenuSlider from './HomeMenuSlider'
import HomeMenuSection from './HomeMenuSection'

const items = [
  { name: 'projects', route: '/art' },
  { name: 'about', route: '/contact' },
  { name: 'development', route: '/development' },
]

export default class HomeMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount() {
    this.animateSection()
  }

  animateSection = () => {
    Anime({
      targets: this.container,
      opacity: [0,1],
      duration: 1000
    })
  }

  render() {
    const {currentItem, direction, onSectionClick} = this.props
    return (
      <div className={css(styles.homeMenuContainer)}>
        <div
          ref={el => {
            this.container = el
          }}
          className={css(styles.menuTagContainer)}>
            {items.map(
              (item, index) =>
                currentItem === index && (
                <HomeMenuSection
                key={`menu-section-${index}`}
                item={item}
                index={index}
                active={currentItem}
                direction={direction}
                onSectionClick={onSectionClick}
              />
            ))}
        </div>
        
      </div>
    )
  }
}

const styles = StyleSheet.create({
  homeMenuContainer: {
    position: 'absolute',
    height: 'auto',
    width: 'auto',
    bottom: '40vh',
    left: '40vw',
    // border: '1px solid green',
    color: 'white',
    [breakPoints.tablet]: {
      // left: '10vw',
      // height: '80vh',
      // width: '80vw',
    },
  },
  menuTagContainer: {
    height: '100%',
    fontFamily: 'sans-serif',
    // letterSpacing: '3px',
    // overflowY: 'hidden',
    // border: '1px solid pink',
  },
})
