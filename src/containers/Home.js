import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import HomeMenu from '../components/home-components/HomeMenu'
import Scroller from '../components/home-components/HomeScroller'

import backgroundImg from '../../assets/home/home_bk.jpeg'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className={css(styles.homeContainer)}>
        <Scroller>
          <HomeMenu />
        </Scroller>
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
