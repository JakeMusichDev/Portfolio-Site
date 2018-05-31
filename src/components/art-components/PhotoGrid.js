import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import PhotoGridRow from './PhotoGridRow'
import {photographyGridData} from '../../utils/data'

export default class PhotoGrid extends Component {
  render() {
    return (
      <div className={css(styles.artContainer)}>
      {photographyGridData.map( (content) => (
        <PhotoGridRow key={`${content.key}`} content={content} />
      ))}
      </div>
    )
  }
}


const styles = StyleSheet.create({
  artContainer: {
    height: '100%',
    border: '1px solid purple',
    display: 'inline-block',
    width: '100%'
  },
  artGridWrapper: {},
})