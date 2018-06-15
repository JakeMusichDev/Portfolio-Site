import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import PhotoProjectsContainer from '../components/art-components/PhotoProjectsContainer'
import PhotoHeader from '../components/art-components/PhotoHeader'
import noise from '../../assets/broken-noise.png'

import Anime from 'animejs'

export default class Art extends Component {
  constructor(props) {
    super(props)

    this.state = {
      childViewOpen: false,
      currentChildView: null
    }
  }

  renderSection = () => {
    if (this.state.currentChildView === 'photo') {
      return (
        <div id="art-container" className={css(styles.photoViewContainer)}>
          <PhotoHeader />
          <PhotoProjectsContainer />
        </div>
      )
    } else {
      return 'Painting'
    }
  }

  openSection = (activeSection) => {
    this.setState({ activeSection })
  }

  render() {
    return (
      <div className={css(styles.artContainer)}>
        <div className={css(styles.photoButton)}>
          <div>PHOTOS</div>
        </div>
        <div className={css(styles.paintingbutton)}>
          paintings
        </div>
        <div className={css(styles.centerImage)}>
          {/* <img src="" alt=""/> */}
          img
        </div>
        <div className={css(styles.lowerMenu)}>
          
        </div>

      </div>
    )
  }
}

const styles = StyleSheet.create({
  artContainer: {
    height: 'calc(100vh)',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(5, 20%)',
    backgroundColor: 'rgb(15,15,15)',
    background: `url${noise}`,
    color: 'white'
  },
  photoViewContainer: {
    height: 'calc(100vh)',
    width: '100vw',
    overflowY: 'scroll',
    display: 'block',
    backgroundColor: 'rgb(15,15,15)',
    background: `url${noise}`,
  },
  photoButton: {  
    gridRow: '2/3',
    gridColumn: '4/6',
    // background: 'white',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignContent: 'center'
  },
  paintingbutton: {
    gridRow: '4/5',
    gridColumn: '1/3',
  },
  centerImage: {
    gridRow: '3/4',
    gridColumn: '3/4',
    background: 'lightblue',
  },
  lowerMenu: {

  }
})
