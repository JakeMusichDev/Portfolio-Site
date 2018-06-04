import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import PhotoGrid from '../components/art-components/PhotoGrid'
import PhotoHeader from '../components/art-components/PhotoHeader'

export default class Art extends Component {
  render() {
    return (
      <div id='art-container' className={css(styles.artContainer)}>
        <PhotoHeader />
        <PhotoGrid />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  artContainer: {
    height: 'calc(100vh - 5vh)',
    width: '100vw',
    overflowY: 'scroll'
  }
})
