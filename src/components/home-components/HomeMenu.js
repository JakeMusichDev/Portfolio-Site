import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../utils/styles'

import HomeMenuSlider from './HomeMenuSlider'
import HomeMenuSection from './HomeMenuSection'

import {items} from '../../data/home-route-data.js'

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
      duration: 2000
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
    height: '100%',
    width: '100%',
    color: 'white',
    gridRow: '3/4',
    gridColumn: '2/5'
  },
})
