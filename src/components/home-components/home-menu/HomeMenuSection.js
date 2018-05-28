import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../../utils/styles'
import '../../../styles/index.css'

export default class HomeMenuSection extends Component {
  componentDidMount() {
    this.animateIn()
  }

  render() {
    const { item, index, active, onSectionClick } = this.props
    const sectionStyle =
      active === index
        ? css([styles.sectionContainer, styles.active])
        : css(styles.sectionContainer)
    return (
      <div className={css(styles.sectionWrapper)} >
        <div id={`menu-section-${index}`} className={sectionStyle}>
          <div
            onClick={e => onSectionClick(e, item)}
            className={css(styles.section)}>
            {item.name.toUpperCase()}
          </div>
        </div>
      </div>
    )
  }

  animateIn = () => {
    const { index, direction } = this.props
    const tl = Anime.timeline()
    tl
      .add({
        targets: `#menu-section-${index}`,
        translateY: `${direction}100%`,
        duration: 0,
      })
      .add({
        targets: `#menu-section-${index}`,
        translateY: '0%',
        opacity:[0,1],
        duration: 500,
        easing: 'easeInOutQuint',
        elasticity: 100,
      })
  }

  attachTilt = () => {

  }
  
}

const styles = StyleSheet.create({
  sectionWrapper: {
    // overflow:'hidden',
    height: '100%',
    width: '100%',
  },
  sectionContainer: {
    height: '100%',
    width: '100%',
    // border: '1px solid red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    display: 'none',
  },
  section: {
    textDecoration: 'none',
    color: 'white',
    opacity: '0.5',
    fontSize: '8em',
    fontFamily: ['Vesper Libre', 'sans-serif'],
    letterSpacing: "2px"
  },
  active: {
    display: 'flex',
  },
})
// <svg className={css(styles.svg)} viewBox="0 0 350 50">
//   <text className={css(styles.text)} y="40">JAKE MUSICH</text>
// </svg>
