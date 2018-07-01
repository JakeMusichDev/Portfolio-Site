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
import PaintingCarousel from '../components/painting-components/PaintingCarousel'

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
    const { activeIndex, childFocusViewActive, activePixiImage } = this.state

    return (
      <div id="paintingView--mainContainer" className={css(styles.paintingViewContainer)}>
        <PaintingsList handleHover={this.handleListHover} handleOpenPainting={this.handleOpenPainting} paintingData={paintingData} />
        <PixiPainting currentItem={activeIndex} activePixiImage={activePixiImage} />
        <div className={css(styles.title)}>
          - recent paintings
        </div>
        {this.renderPaintingViewChildren()}
      </div>
    )
  }

  renderPaintingViewChildren = () => {
    const { activeIndex, childFocusViewActive, activePixiImage } = this.state;
    return childFocusViewActive ? <PaintingCarousel data={paintingData} /> : null
  }

  handleOpenPainting = e => {
    Anime({
      targets: "#"
    })

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
      this.state.activeIndex -= 1;
    this.setState({activeIndex: nextIndex})
  }
}

const styles = StyleSheet.create({
  paintingViewContainer: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(8, 1fr)',
    color: 'white',
    background: 'rgb(15, 15, 15)',

  },
  title: {
    gridRow: '5/6',
    gridColumn: '5/6',
    textAlign: 'right',
    fontSize: 10,

  }
})
