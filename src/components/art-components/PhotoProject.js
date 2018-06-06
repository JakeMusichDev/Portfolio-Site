import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Photo from '../art-components/Photo'
import '../../styles/index.css'

export default class PhotoProject extends Component {
  render() {
    const { project } = this.props
    return (
      <div className={css(styles.photoProjectContainer)}>
        <div className={css(styles.photoProjectName)}>{project.name}</div>
        <div className={css(styles.photoProject)}>
          {project.content.map(content => (
            <Photo key={`${content.key}`} content={content} />
          ))}
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  photoProjectContainer: {
    height: 'auto',
    width: '100%',
    marginBottom: '40vh',
  },
  photoProject: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // border: '1px solid red',
    marginBottom: '10vh',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  photoProjectName: {
    fontFamily: ['Lato', 'sans-serif'],
    fontSize: 40,
  },
})
