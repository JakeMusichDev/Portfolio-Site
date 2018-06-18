import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { paintingData } from '../utils/data.js'
import Anime from 'animejs'

import PaintingInfo from '../components/painting-components/PaintingInfo'
import DirectionArrow from '../components/painting-components/DirectionArrow'
import ActivePaintingContainer from '../components/painting-components/ActivePaintingContainer'
import PaintingProgressIndication from '../components/painting-components/PaintingProgressIndication'


export default class PaintingView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      focuslViewOpen: false,
      activeIndex: 0
    }
  }

  render() {
    const { activeIndex } = this.state
    const { handleNextActiveItem, direction } = this.props
    return (
      <div id="paintingView--mainContainer" className={css(styles.paintingViewContainer)}>
        <ActivePaintingContainer activeIndex={activeIndex} paintingData={paintingData} />
        <PaintingProgressIndication activeIndex={activeIndex} paintingData={paintingData} />
        <DirectionArrow handleNextActiveItem={this.handleNextActiveItem} direction={'+'} />
        <DirectionArrow handleNextActiveItem={this.handleNextActiveItem} direction={'-'} />
        <PaintingInfo activeIndex={activeIndex} paintingData={paintingData} />
      </div>
    )
  }

  handleNextActiveItem = e => {
    console.log(e);
    
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
    background: 'rgb(15, 15, 15)'
  },
})
