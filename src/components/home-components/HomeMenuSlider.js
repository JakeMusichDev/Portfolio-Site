import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class HomeMenu extends Component {
  componentDidMount() {
    const tl = Anime.timeline()
    tl.add({
      targets: ['#'],
    })
  }

  render() {
    return (
      <div className={css(styles.homeMenuSliderContainer)}>
        <div>
          <svg width="30vw" height="100vh" viewBox="0 0 576 1">
            <rect
              id="Rectangle"
              width="100"
              height="575.5"
              transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"
              stroke="#F2F2F2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  homeMenuSliderContainer: {
    height: '10%',
    width: '100%',
  },
})
