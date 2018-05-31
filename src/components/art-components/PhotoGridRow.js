import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { log } from 'util';


export default class PhotoGridRow extends Component {
  render() {
    const {content} = this.props
    return (
      <div className={css(styles.gridRowContainer)}>
        <div className={css(styles.gridRow)}>
          <div className={css(styles.photo)}>
            <img src={`${content.src}`} alt='' />
          </div>
          <div className={css(styles.photoDetail)}>
            {content.title.toUpperCase()}
          </div>
        </div>
      </div>
    )
  }
}


const styles = StyleSheet.create({
  gridRowContainer: {
    height: 'auto',
    width: '100%',
    border: '1px solid pink',
    // display: 'flex',
    // flexDirection: 'row',
  },
  gridRow: {
    height: '100%',
    width: '100%',
  }
})