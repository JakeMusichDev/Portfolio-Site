import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import Painting from './Painting'

export default class PaintingsList extends Component {
  componentDidMount() {
    // Anime.timeline().add({
    //   targets: this.container.children,
    //   // height: '0%',
    //   duration: 0,
    //   opacity: 0,
    //   translateY: '200%'
    // }).add({
    //   targets: this.container.children,
    //   translateY: '0%',
    //   opacity: [0, 1],
    //   easing: 'easeInSine',
    //   duration: 1000,
    //   delay: function(target, index) {
    //     return index * 100;
    //   },
    // })
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
    height: '100%',
    width: '100%',
    // marginTop: '10vh',
    gridRow: '3/9',
    gridColumn: '1/4',
    color: '#F2F2F2',
    overflowX: 'scroll',
    // border:'1px solid green',
    cursor: 'pointer',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    flexWrap: 'wrap',
    // flexBasis: 'fit-content'
  },
  listItemWrapper: {
    height: 'auto',
    width: 'auto',
    // border:'1px solid blue',
    textAlign:'left',
    fontFamily: 'Vollkorn',
    fontSize: 12,
    // align: "left",
    letterSpacing: '5px',
    padding: '3%',
    opacity: '0.5',
    // transition: '0.5s all',
    ":hover": {
      opacity: '1',
      scale: 1.2
    }
  }
})
