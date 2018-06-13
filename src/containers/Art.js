import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import PhotoGrid from '../components/art-components/PhotoGrid'
import PhotoHeader from '../components/art-components/PhotoHeader'
import Anime from 'animejs'

export default class Art extends Component {
  render() {
    return (
      <div id='art-container' className={css(styles.artContainer)}>
        <div className={css(styles.line)}></div>
        <PhotoHeader />
        <PhotoGrid />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  artContainer: {
    height: 'calc(100vh)',
    width: '100vw',
    overflowY: 'scroll',
    display: 'block',
    background: 'rgb(15,15,15)',
  },
  line: {
    height: '100vh',
    width: '1px',
    position: 'absolute',
    opacity: 0.4,
    // borderRight: '1px solid white',
    marginLeft: '15vw',
    background: 'white'
  }
})
