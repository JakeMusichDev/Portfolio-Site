import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Photo from '../art-components/Photo'

export default class PhotoProject extends Component {
  render() {
    const {project} = this.props
    console.log(project);
    
    return (
      <div className={css(styles.photoProjectContainer)}>
        <div className={css(styles.photoProject)}>
          {project.content.map( (content) => (
            <Photo key={`${content.key}`} content={content} />
          ))}
        </div>
        {project.name}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  photoProjectContainer: {
    height: 'auto',
    width: '100%',
  },
  photoProject: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    border: '1px solid red',
    marginBottom: '10vh',
    justifyContent: 'center',
  }
})