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
    // {name}
    return (
      <div id={`menu-section-${index}`} className={css(styles.sectionContainer)}>
        <div className={css(styles.section)}>
          <Link to={`/${item}`}>
            {item.toUpperCase()}
          </Link>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    height:"100%",
    width:"100%",
    background:"lightblue",
    opacity:'0.5'
  },
  section: {
    textAlign:'center',
    fontSize:"1vw",

  },
})
