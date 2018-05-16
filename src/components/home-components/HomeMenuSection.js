import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../utils/styles'

import HomeMenuSlider from '../home-components/HomeMenuSlider'

export default class HomeMenuSection extends Component {
  componentDidMount() {}

  render() {
    const {item} = this.props;
    // {name}
    return (
      <div className={css(styles.sectionContainer)}>
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
    height:"10vh",
    width:"100%"
  },
  section: {
    textAlign:'center',
    fontSize:"1vw"
  },
})
