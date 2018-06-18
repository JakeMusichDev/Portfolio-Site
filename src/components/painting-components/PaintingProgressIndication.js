import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import '../../styles/index.css'

export default class PaintingProgressIndication extends Component {
  render() {
    const { activeIndex, paintingData } = this.props
    return (
      <div id="paintingView--mainContainer" className={css(styles.paintingViewContainer)}>
        {paintingData.map(
          (item, index) =>
            activeIndex === index && (
              <div key='active' className={css(styles.text)}>
                0{ index + 1 }. / { paintingData.length }
              </div>  
            )
        )}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  paintingViewContainer: {
    height: '100%',
    width: '100%',
    gridRow: '5/6',
    gridColumn: '4/5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    height: 'auto',
    width: 'auto',
    color: 'white',
    fontFamily: ['Inconsolata', 'serif'],
    fontSize: 10,
  }
})
