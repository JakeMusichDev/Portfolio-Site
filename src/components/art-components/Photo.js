import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import '../../styles/index.css'
import Rellax from 'rellax'
import { relative } from 'path'
import Reveal from 'react-reveal/Reveal'

export default class Photo extends Component {
  componentDidMount() {
    const tl = Anime.timeline()
    // tl.add({
    //   targets: this.photographDiv,
    //   translateY: '-100%',
    //   duration: 0,
    // }).add({
    //   targets: this.photographDiv,
    //   translateY: '0%',
    //   duration: 1000,
    //   opacity: [0,1],
    //   easing: 'easeInExpo',
    // })
  }

  render() {
    const { content, handleOpenProject } = this.props
    return (
      <div ref={ref => { this.photographDiv = ref }} onClick={handleOpenProject}className={css(styles.photoContainer)}>
        {content.src && (
          // <Reveal effect='fadeIn'>
            <img
              id='photograph'
              className={css(styles.img)}
              src={`${content.src}`}
              alt="photo"
            />
          // </Reveal>
          )}

      </div>
    )
  }
}

const styles = StyleSheet.create({
  photoContainer: {
    height: 'auto',
    // width: '30vw',
    overflow: 'hidden',
    // border: '1px solid blue'
  },
  img: {
    height: '100%', 
    width: '100%',
  }
})
