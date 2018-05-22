import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../../utils/styles'

import HomeMenuSlider from './HomeMenuSlider'

export default class HomeMenuSection extends Component {
  componentDidMount() {}

  render() {
    const {item, index} = this.props;
    return (
      <div id={`menu-section-${index}`} className={css(styles.sectionContainer)}>
        <Link className={css(styles.section)} to={`/${item}`}>
          { item.toUpperCase() }
        </Link>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    height:"10vh",
    width:"100%",
  },
  section: {
    textAlign:'right',
    textDecoration: 'none',
    color:"white",
    opacity:"0.5",
    fontFamily:["serif","sans-serif"],
  },
})
// <svg className={css(styles.svg)} viewBox="0 0 350 50">
//   <text className={css(styles.text)} y="40">JAKE MUSICH</text>
// </svg>
