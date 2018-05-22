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
        <div className={css(styles.section)}>
          <div>
            {item.toUpperCase()}
          </div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    height:"100%",
    width:"100%",
  },
  section: {
    textAlign:'right',
    fontSize:"3vw",
    textDecoration: 'none',
    color:"white",
    fontFamily:["Source Sans Pro","sans-serif"],
  },
})
