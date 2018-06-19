import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { paintingData } from '../utils/data.js'
import Anime from 'animejs'


export default class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      childFocusViewActive: false,
      activeIndex: 0
    }
  }

  render() {
    return (
      <div id="workView--mainContainer" className={css(styles.workViewContainer)}>
        
      </div>
    )
  }

  handleOpenPainting = e => {
    this.setState({
      childFocusViewActive: true, 
      activeIndex: e
    })
  }
}

const styles = StyleSheet.create({
  workViewContainer: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(5, 20%)',
    background: 'rgb(15, 15, 15)',
  },
})
