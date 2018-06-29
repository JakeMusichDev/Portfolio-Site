import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import Reveal from 'react-reveal/Reveal'

export default class WorkProjectImage extends Component {
  componentDidMount () {
    
  }
  

  render() {
    const { image, movie, onOpen } = this.props
    
    return (
      <div onClick={onOpen} className={css(styles.projectImage)}>
        <Reveal effect="fadeInUp" duration={1500}>
          {movie ? 
            <video autoPlay height='500' width='auto' src={`${movie}`}></video> :
            <img className={css(styles.img)} src={`${image}`} />
          }
        </Reveal>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  projectImage: {
    width: '100%',
    width: '100%',
    gridRow: '2/5',
    gridColumn: '3/7',
    objectFit: 'contain',
    overflow: 'hidden',
    zIndex: 2,
    ":hover": {
      cursor: 'pointer'
    }
  },
  img: {
    height: '100%',
    width: 'auto',
  }
})
