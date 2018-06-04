import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import PhotoProject from './PhotoProject'
import { photographyGridData } from '../../utils/data'

export default class PhotoGrid extends Component {
  render() {
    return (
      <div className={css(styles.artContainer)}>
      { photographyGridData.map( (content) => (
          <PhotoProject key={`${content.key}`} content={content} />
      ))}
      </div>
    )
  }
}


const styles = StyleSheet.create({
  artContainer: {
    height: '100%',
    width: '90%',
    marginLeft: '10%',
    display: 'flex',
    // background: 'lightblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-evenly',
    
  }
})