import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import PhotoProject from './PhotoProject'
import { photographyGridData } from '../../utils/data'

export default class PhotoGrid extends Component {
  render() {
    return (
      <div className={css(styles.artContainer)}>
      { photographyGridData.map( (project) => (
          <PhotoProject key={`${project.name}`} project={project} />
      ))}
      </div>
    )
  }
}


const styles = StyleSheet.create({
  artContainer: {
    height: 'auto',
    width: '85%',
    marginLeft: '15%',
    marginRight: '5%',
    display: 'block',
  }
})