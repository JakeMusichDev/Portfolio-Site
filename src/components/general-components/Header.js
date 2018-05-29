import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "./../../styles/index.css"

import TitleHeader from './TitleHeader'

export default class Header extends Component {
  render() {
    return (
      <div className={css(styles.headerWrapper)}>
        <div
          ref={el => {this.header = el}}
          className={css(styles.header)}
        >
          <TitleHeader />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    border:"1px solid blue",
    height: '5vh',
    width: '100vw',
    position: 'absolute',
  }
})
