import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import '../../styles/index.css'
import Rellax from 'rellax'
import { relative } from 'path'
import WOW from 'wowjs'

export default class Photo extends Component {
  componentDidMount() {
    Anime({
      targets: this.header,
      opacity: [0,1],
      duration: 2000,
    })
  }

  render() {
    const { content } = this.props
    return (
      <div
        ref={ref => {
          this.header = ref
        }}
        className={css(styles.photoContainer)}>
        {/* {content.title} */}
        {content.src && (
          <img
            className="wow bounceIn"
            data-wow-duration="2s" 
            data-wow-delay="5s"
            className={css(styles.photo)}
            src={`${content.src}`}
            alt="photo"
          />
        )}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  photoContainer: {
    height: 'auto',
    width: '100%',
    // margin: '2%',
  },
  photo: {
    height: '100%',
    width: '100%',
  }
})
