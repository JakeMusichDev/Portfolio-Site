import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { paintingData } from '../utils/data.js'
import Anime from 'animejs'

import PaintingInfo from '../components/painting-components/PaintingInfo'
import DirectionArrow from '../components/painting-components/DirectionArrow'
import ActivePaintingContainer from '../components/painting-components/ActivePaintingContainer'
import PaintingProgressIndication from '../components/painting-components/PaintingProgressIndication'
import PaintingsList from '../components/painting-components/PaintingsList'
import PixiPainting from '../components/painting-components/PixiPainting'

export default class PaintingView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      childFocusViewActive: false,
      activeIndex: 0,
      activePixiImage: null
    }
  }

  render() {
    return this.renderPaintingViewChildren()
  }

  renderPaintingViewChildren = () => {
    const { activeIndex, childFocusViewActive, activePixiImage } = this.state

    if(childFocusViewActive) {
      return(
        <div id="paintingView--mainContainer" className={css(styles.paintingChildContainer)}>
          <ActivePaintingContainer activeIndex={activeIndex} paintingData={paintingData} />
          {/* <PaintingProgressIndication activeIndex={activeIndex} paintingData={paintingData} />
          <PaintingInfo activeIndex={activeIndex} paintingData={paintingData} />
          <DirectionArrow handleNextActiveItem={this.handleNextActiveItem} direction={'+'} />
          <DirectionArrow handleNextActiveItem={this.handleNextActiveItem} direction={'-'} /> */}
        </div>
      )
    } else {
      return (
        <div id="paintingView--mainContainer" className={css(styles.paintingViewContainer)}>
          <PaintingsList handleHover={this.handleListHover} handleOpenPainting={this.handleOpenPainting} paintingData={paintingData} />
          <PixiPainting currentItem={activeIndex} activePixiImage={activePixiImage} />
        </div>
      ) 
    }
  }

  handleOpenPainting = e => {
    this.setState({
      childFocusViewActive: true, 
      activeIndex: e
    })
  }

  handleListHover = e => {
    this.setState({
      activePixiImage: e
    })
  }

  handleNextActiveItem = e => {  
    const nextIndex = e === '+' ? 
      this.state.activeIndex += 1 :
      this.state.activeIndex -= 1

    this.setState({activeIndex: nextIndex})
  }
}

const styles = StyleSheet.create({
  paintingViewContainer: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(5, 20%)',
    color: 'white',
    background: 'rgb(15, 15, 15)',
    // background: '#F2F2F2',

  },
  paintingChildContainer: {
    height: '100vh',
    width: '100vw',
  }
})
