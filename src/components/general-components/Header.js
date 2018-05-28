import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "./../../styles/index.css"

import TitleHeader from './TitleHeader'

export default class Header extends Component {
  componentDidMount() {
    // Anime({
    //   targets:this.header,
    //   translateY:['-100%'],
    //   duration:0,
    //   opacity:0
    // })
    // Anime({
    //   targets:this.header,
    //   translateY:['0%'],
    //   opacity:1,
    //   duration:2000,
    //   delay:1000
    // })
  }

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
    // border:"1px solid blue",
    height:"8vh",
    position: 'absolute',
    width: '100vw',
    // paddingLeft:'10%'
  },
  titleHeader: {
  },
})
