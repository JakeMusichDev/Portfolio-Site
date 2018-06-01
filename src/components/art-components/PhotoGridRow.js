import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class PhotoGridRow extends Component {
  render() {
    const {content} = this.props
    return (
      <div className={css(styles.gridRowContainer)}>
        <div className={css(styles.gridRow)}>
          <div className={css(styles.photoWrapper)}>
          { content.src && 
              <img
                className={css(styles.photo)}
                src={`${content.src}`}
                alt="photo"
              />
          }
          </div>
        </div>
      </div>
    )
  }
}


{/* <div className={css(styles.photoDetail)}>
{content.title.toUpperCase()}
</div> */}

const styles = StyleSheet.create({
  gridRowContainer: {
    height: 'auto',
    width: 'auto',
    // border: '1px solid red',
  },
  // gridRow: {
  //   height: '100%',
  //   width: '100%',
  // },
  // photoWrapper: {
  //   height: '100%',
  //   width: '100%',
  //   // border: '1px solid yellow',
  // }, 
  photo: {
    height: 'auto',
    width: '200px',
    margin:'20px',
    border: '1px solid yellow',
  }
})