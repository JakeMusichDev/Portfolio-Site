import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import Painting from './Painting'

export default class PaintingsList extends Component {
  render() {
    const { handleOpenPainting, paintingData } = this.props
    return (
      <div id="paintingView--mainContainer" className={css(styles.paintingListContainer)}>
        {paintingData.map(
          (item, index) => (
            <div onClick={handleOpenPainting} className={css(styles.listItemWrapper)}>
              {item.title}
            </div>
          )
        )}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  paintingListContainer: {
    height: '100%',
    width: '100%',
    gridRow: '3/5',
    gridColumn: '1/2',
    // border:'1px solid red',
    color: 'white',
    // display: 'flex',
    // overflowX: 'scroll'
  },
  listItemWrapper: {
    height: 'auto',
    width: '100%',
    // border:'1px solid white',
    textAlign:'right',
    fontFamily: 'Inconsolata',
    fontSize: "10px",
    lineHeight: "20px",
    align: "Right",
    letterSpacing: '5px',
    opacity: '0.7',
    transition: '0.5x  all',
    ":hover": {
      opacity: '1'
    }
  },
  listItem: {
    height: 'auto',
    width: '100%',
    fontFamily: 'Inconsolata',
    fontStyle: "Regular",
    fontSize: "24px",
    lineHeight: "50px",
    align: "Right",
    letterSpacing: '10%'
    // margin: 'auto 0',
    // border:'1px solid blue'
  }
})
