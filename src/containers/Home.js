import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import Scroller from '../components/home-components/Scroller'
import TitleHeader from '../components/general-components/TitleHeader'

import PixiDisplacementImage from '../components/general-components/PixiDisplacementImage'

export default class Home extends Component {
  componentDidMount() {
  }

  render() {
    let component = this;
    return (
      <div id='home' className={css(styles.homeContainer)}>
        <PixiDisplacementImage />
        <Scroller />
      </div>
    )
  }

}

const styles = StyleSheet.create({
  homeContainer: {
    height: '100vh',
    // background: `url(${backgroundImg}) no-repeat center center`,
    backgroundSize: 'cover',
  },
  cont: {
    height: '200vh',
  },
})
