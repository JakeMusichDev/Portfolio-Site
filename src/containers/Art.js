import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import PhotoGrid from '../components/art-components/PhotoGrid'

export default class Art extends Component {
  render() {
    return (
      <div className={css(styles.artContainer)}>
        <PhotoGrid />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  artContainer: {
    height: 'calc(100vh - 5vh)',
    width:'100vw',
    overflowY: 'scroll',
  },
})
