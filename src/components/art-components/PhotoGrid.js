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
    width: '90%',
    marginLeft: '5%',
    overflowY: 'scroll',
    display: 'flex',
    // background: 'lightblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-evenly',
    
  }
})