import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import '../../styles/index.css'

export default class PhotoGridRow extends Component {
  componentDidMount() {
    const tl = Anime.timeline()
    tl.add({
      targets: this.header,
      opacity: 0,
      duration: 0,
      translateX: '100%',
    }).add({
      targets: this.header,
      opacity: [0.9],
      duration: 1000,
      elasticity: 0,
      translateX: '0%',
      easing: 'easeInQuint',
      delay: 200
    })
  }

  render() {
    const { content } = this.props
    return (
      <div  className={css(styles.photoHeaderContainer)}>
        <div ref={ref => {this.header = ref}}  className={css(styles.photoHeaderTitle)}>
          - photo series
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  photoHeaderContainer: {
    height: 'auto',
    width: '100%',
    // border: '1px solid blue',
    gridColumn: '5/6',
    gridRow: '2/3',
    alignSelf: 'end'
  },
  photoHeaderTitle: {
    // border:'1px solid green',
    fontSize: 10,
    fontFamily: ['Inconsolata', 'sans-serif'],
    letterSpacing: "2px",
    fontDecoration: 'italic',
    color: '#F2f2F2',
    zIndex: '12',
  },
})
