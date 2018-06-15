import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "./../../styles/index.css"

import HeaderName from './HeaderName'
import HeaderMenu from './HeaderMenu'

export default class Header extends Component {
  render() {
    return (
      <div className={css(styles.headerWrapper)}>
        <HeaderName />
        <HeaderMenu />
      </div>
    );
  }
}


const styles = StyleSheet.create({
  headerWrapper: {
    height: '10vh',
    width: '100vw',
    display: 'grid',
    gridTemplateRows: 'repeat(1, 1fr)',
    gridTemplateColumns: 'repeat(10, auto)',
    position: 'absolute',
    // background: 'red',
    top:0,
    left:0,
    // background: 'none'
  }
})
