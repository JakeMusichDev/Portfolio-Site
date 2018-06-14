import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import PhotoProjectsContainer from '../components/art-components/PhotoProjectsContainer'
import PhotoHeader from '../components/art-components/PhotoHeader'
import Anime from 'animejs'

export default class Art extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSection: 'photo',
    }
  }

  renderSection = () => {
    if (this.state.activeSection === 'photo') {
      return (
        <div id="art-container" className={css(styles.artContainer)}>
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
    return this.renderSection()
  }
}

const styles = StyleSheet.create({
  artContainer: {
    height: 'calc(100vh)',
    width: '100vw',
    overflowY: 'scroll',
    display: 'block',
    background: 'rgb(15,15,15)',
  },
  line1: {
    height: '100vh',
    width: '1px',
    position: 'absolute',
    opacity: 0.4,
    // borderRight: '1px solid white',
    marginLeft: '20vw',
    background: 'white',
  },
  line2: {
    height: '100vh',
    width: '1px',
    position: 'absolute',
    opacity: 0.4,
    // borderRight: '1px solid white',
    marginLeft: '40vw',
    background: 'white',
  },

  line3: {
    height: '100vh',
    width: '1px',
    position: 'absolute',
    opacity: 0.4,
    // borderRight: '1px solid white',
    marginLeft: '60vw',
    background: 'white',
  },
  line4: {
    height: '100vh',
    width: '1px',
    position: 'absolute',
    opacity: 0.4,
    // borderRight: '1px solid white',
    marginLeft: '80vw',
    background: 'white',
  },
})
