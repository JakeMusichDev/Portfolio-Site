import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import Painting from './Painting'

export default class PaintingsList extends Component {
  componentDidMount() {
    Anime({
      targets: this.container.children,
      opacity: [
        0, 1
      ],
      translateY: [
        150, 0
      ],
      duration: 1000,
      easing: 'easeOutSine',
      elasticity : 30,
      delay: (e, i) => {
        return (i + 1) * 2;
      },
  })
}
  render() {
    const { handleOpenPainting, paintingData } = this.props
    return (
      <div id="paintingView--mainContainer" ref={el => (this.container = el)} className={css(styles.paintingListContainer)}>
        {paintingData.map(
          (item, index) => (
            <div onClick={() => this.handleClick(index)} className={css(styles.listItemWrapper)}>
              {item.title}
            </div>
          )
        )}
      </div>
    )
  }

  handleClick = (e) => {
    const { handleOpenPainting } = this.props
    handleOpenPainting(e)
  }
}

const styles = StyleSheet.create({
  paintingListContainer: {
    height: '100%',
    width: '100%',
    gridRow: '3/4',
    gridColumn: '2/5',
    // border:'1px solid red',
    color: 'black',
    // display: 'flex',
    // overflowX: 'scroll'\
    cursor: 'pointer'
  },
  listItemWrapper: {
    height: 'auto',
    width: '100%',
    // border:'1px solid white',
    textAlign:'left',
    fontFamily: 'Inconsolata',
    fontSize: "12px",
    lineHeight: "25px",
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
