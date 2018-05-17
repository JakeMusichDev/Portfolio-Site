import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import Scroller from '../components/home-components/Scroller'
import TitleHeader from '../components/home-components/TitleHeader'

import backgroundImg from '../../assets/home/home_bk.jpeg'

export default class Home extends Component {
  render() {
    return (
      <div className={css(styles.homeContainer)}>
        <TitleHeader />
        <Scroller />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    height: '100vh',
    background: `url(${backgroundImg}) no-repeat center center`,
    backgroundSize: 'cover',
  },
  cont: {
    height: '200vh',
  },
})
