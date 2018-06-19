import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Anime from 'animejs'
import VanillaTilt from 'vanilla-tilt'

export default class PaintingInfo extends Component {
  render () {
    // const { metadata } = this.props
    return (
      <div className={css(styles.infoContainer)} >
        <div className={css(styles.title)}>
          info
          {/* {metadata.title} */}
        </div>
        <div className={css(styles.year)}>
          {/* {metadata.year} */}
        </div>
        <div className={css(styles.dimensions)}>
          {/* {metadata.dimensions} */}
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    height: '100%',
    width: '100%',
    color: 'white',
    gridRow: '4/5',
    gridColumn: '4/5',
    color:"white",
    fontSize:"11px",
    fontFamily: ['Inconsolata', 'serif'],
    // border: '1px solid white',
    textAlign: 'right'
  },
  title: {

  },
  year: {
    
  },
  dimensions: {
      
  }
})

