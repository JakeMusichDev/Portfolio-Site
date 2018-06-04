import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Photo from '../art-components/Photo'

export default class PhotoProject extends Component {
  render() {
    const {content} = this.props
    return (
      <div className={css(styles.photoProjectContainer)}>
        <div className={css(styles.photoProject)}>
          {content.map( (content) => (
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
  },
  photoProject: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // border: '1px solid red',
    marginBottom: '10vh',
    justifyContent: 'space-evenly',
  }
})