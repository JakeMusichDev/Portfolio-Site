import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import Painting from './Painting'

export default class PaintingsList extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: this.container.children,
      height: '0%',
      duration: 0,
      opacity: 0,
      translateY: '200%'
    }).add({
      targets: this.container.children,
      translateY: '0%',
      opacity: [0.4],
      easing: 'easeInSine',
      duration: 1000,
      delay: function(target, index) {
        return index * 100;
      },
    })
  }

  render() {
    const { handleOpenPainting, paintingData } = this.props
    return (
      <div id="paintingView--mainContainer" ref={el => (this.container = el)} className={css(styles.paintingListContainer)}>
        {paintingData.map(
          (item, index) => (
            <div 
              key={`list-item-${index}`} 
              onMouseEnter={() => this.mouseEnter(item)} 
              onClick={() => this.handleClick(index)} 
              className={css(styles.listItemWrapper)}
            >
              {item.title}
            </div>
          )
        )}
      </div>
    )
  }

  mouseEnter = (item) => {
    const { handleHover } = this.props
    handleHover(item)
  }

  handleClick = (e) => {
    const { handleOpenPainting } = this.props
    handleOpenPainting(e)
  }
}

const styles = StyleSheet.create({
  paintingListContainer: {
    height: 'auto',
    width: '100%',
    gridRow: '1/6',
    gridColumn: '1/6',
    color: '#F2F2F2',
    // display: 'flex',
    overflowX: 'scroll',
    // border:'1px solid green',
    cursor: 'pointer',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    // flexBasis: 'fit-content'
  },
  listItemWrapper: {
    height: 'auto',
    // width: '100%',
    // border:'1px solid blue',
    textAlign:'left',
    fontFamily: 'Vollkorn',
    fontSize: "30px",
    // align: "left",
    letterSpacing: '5px',
    padding: '5%',
    opacity: '0.4',
    // transition: '0.5s all',
    ":hover": {
      opacity: '1',
      // scale: 1.1
    }
  }
})
