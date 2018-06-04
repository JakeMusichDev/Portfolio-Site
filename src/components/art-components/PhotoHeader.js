import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import '../../styles/index.css'
import Rellax from 'rellax'
import { relative } from 'path'

export default class PhotoGridRow extends Component {
  componentDidMount() {
    Anime({
      targets: this.header,
      opacity: [0,1],
      duration: 2000,
      complete: () => this.attachRellax()
    })
  }

  attachRellax = () => {
    const rellax = new Rellax(this.header, {
      wrapper: '#art-container',
      speed: -2,
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
      </div>
    )
  }
}

const styles = StyleSheet.create({
  photoHeaderContainer: {
    height: '80%',
    width: '90%',
    marginLeft: '10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  photoHeaderWrapper: {
    height: 'auto',
    width: 'auto',
    // border: '1px solid blue',
    fontSize: 80,
    fontFamily: ['Vollkorn', 'sans-serif'],
  },
  photoHeader: {},
})
