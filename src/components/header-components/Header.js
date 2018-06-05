import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "./../../styles/index.css"

import TitleHeader from './TitleHeader'
import Menu from './Menu'

export default class Header extends Component {
  render() {
    return (
      <div className={css(styles.headerWrapper)}>
        <div className={css(styles.titleHeader)}>
          <TitleHeader />
        </div>
        <div className={css(styles.menu)}>
          <Menu />
        </div>
      </div>
    );
  }
}


const styles = StyleSheet.create({
  headerWrapper: {
    height: '5vh',
    width: '100vw',
    display: 'inline-block'
  },
  titleHeader: {
    height: '100%',
    width: 'auto',
    float: 'left'
  },
  menu: {
    height: '100%',
    width: 'auto',
    float: 'right'
  }
})
