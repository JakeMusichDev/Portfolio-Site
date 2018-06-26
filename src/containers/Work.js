import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

// import { paintingData } from '../utils/data.js'

import WorkProjectContainer from '../components/work-components/WorkProjectContainer'

export default class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      childFocusViewActive: false,
      activeIndex: 0
    }
  }

  // componentDidMount() {
  //   Anime({
  //     targets: '#workView--mainContainer',
      
  //   })
  // }

  render() {
    // const projectList = 
    return (
      <div id="workView--mainContainer" className={css(styles.workViewContainer)}>
        <WorkProjectContainer />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  workViewContainer: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 15%)',
    gridTemplateRows: 'repeat(6, 15%)',
    background: 'rgb(15, 15, 15)',
  },
})
