import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import Reveal from 'react-reveal/Reveal'

export default class WorkProjectImage extends Component {
  componentDidMount () {
    
  }
  

  render() {
    const { image } = this.props
    return (
      <div className={css(styles.projectImage)}>
        <Reveal effect="fadeInUp" duration={1500}>
          <img className={css(styles.img)} src={`${image}`} />    
        </Reveal>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  projectImage: {
    width: '100%',
    // border: '1px solid pink',
    width: '100%',
    gridRow: '2/5',
    gridColumn: '3/7',
    zIndex: 2,
    objectFit: 'contain',
    overflow: 'hidden'
  },
  img: {
    height: '100%',
    width: 'auto'
  }
})
