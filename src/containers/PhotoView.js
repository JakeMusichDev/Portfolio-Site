import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import PhotoProjectsContainer from '../components/art-components/PhotoProjectsContainer'
import PhotoHeader from '../components/art-components/PhotoHeader'
import noise from '../../assets/broken-noise.png'

import Anime from 'animejs'

export default class PhotoView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      childViewOpen: false,
      currentprojectView: 'photo'
    }
  }


  render() {
    return (
      <div id="photoView--mainContainer" className={css(styles.photoViewContainer)}>
        {/* <PhotoHeader /> */}
        <div className={css(styles.mainScroller)}>
          <PhotoProjectsContainer />
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  photoViewContainer: {
    height: 'calc(100vh)',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(5, 20%)',
    backgroundColor: 'rgb(15,15,15)',
    backgroundImage: `url${noise}`,
    color: 'white',

  },
  mainScroller: {
    gridRow: '1/6',
    gridColumn: '2/5',
    overflowY: 'scroll',
    border:'1px solid red'
  }
})
