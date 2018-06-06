import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import '../../styles/index.css'
import Rellax from 'rellax'
import { relative } from 'path'

export default class PhotoGridRow extends Component {
  componentDidMount() {
    const tl = Anime.timeline()
    tl
    .add({
      targets: this.header,
      opacity: 0,
      duration: 0,
      translateY: '-100%',
    }).add({
      targets: this.header,
      opacity: [1],
      duration: 1500,
      elasticity: 0,
      translateY: '0%',
      easing: 'easeInSine',
      complete: () => this.attachRellax()
    })
  }

  attachRellax = () => {
    const rellax = new Rellax(this.header, {
      wrapper: '#art-container',
      speed: -5,
    })
  }

  render() {
    const { content } = this.props
    return (
      <div
        ref={ref => {
          this.header = ref
        }}
        className={css(styles.photoHeaderContainer)}>
        <div className={css(styles.photoHeaderWrapper)}>
          <div className={css(styles.photoHeader)}>PHOTOGRAPHY</div>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

{/* <div className={css(styles.photoHeader)}>I take photographs. People, places, things.</div>           */}

const styles = StyleSheet.create({
  photoHeaderContainer: {
    height: '90%',
    width: '90%',
    marginLeft: '10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // border: '1px solid blue',
    marginBottom: '30%'
  },
  photoHeaderWrapper: {
    height: 'auto',
    // border: '1px solid blue',
    fontSize: 80,
    fontFamily: ['Vollkorn', 'sans-serif'],
  },
  photoHeader: {},
})
