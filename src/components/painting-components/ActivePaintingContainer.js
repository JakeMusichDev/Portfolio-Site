import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import Painting from './Painting'

export default class ActivePaintingContainer extends Component {
  render() {
    const { activeIndex, paintingData } = this.props
    return (
      <div id="paintingView--mainContainer" className={css(styles.paintingViewContainer)}>
        {paintingData.map(
          (item, index) =>
            activeIndex === index && (
              <Painting key={item.key} item={item} />
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
    gridRow: '2/5',
    gridColumn: '2/5',
    // border:'1px solid red',
    color: 'white',
    display: 'flex'
  }
})
