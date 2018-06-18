import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import '../../styles/index.css'
import Rellax from 'rellax'
import { relative } from 'path'
import noguchi from '../../../assets/photography/noguchi_1.JPG'

export default class PhotoGridRow extends Component {
  componentDidMount() {
    // this.attachRellax() 
    const tl = Anime.timeline()
    tl
    .add({
      targets: this.header,
      opacity: 0,
      duration: 0,
      translateX: '10%',
    }).add({
      targets: this.header,
      opacity: [1],
      duration: 800,
      elasticity: 0,
      translateX: '0%',
      easing: 'easeInSine',
    })
        // Anime({
    //   targets: '#photo-overlay',
    //   translateX: '100%',
    //   duration: 400,
    //   easing: 'easeOutSine',
    //   delay: 1000
    // })
  }

  attachRellax = () => {
    const rellax_header = new Rellax(this.header, {
      wrapper: '#art-container',
      speed: -4.5,
    })
    const rellax_img = new Rellax(this.img, {
      wrapper: '#art-container',
      speed: -3.5,
    })
  }

  render() {
    const { content } = this.props
    return (
      <div  className={css(styles.photoHeaderContainer)}>
        <div ref={ref => {this.header = ref}}  className={css(styles.photoHeaderTitle)}>
          - projects 
        </div>
        <div ref={ref => {this.img = ref}} className={css(styles.photoHeaderImg)}>
          {/* <div id='photo-overlay' className={css(styles.overlay)}/> */}
          {/* <img src={noguchi} className={css(styles.photo)} alt="photo"/> */}
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  photoHeaderContainer: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridRow: '1/6',
    gridColumn: '1/2',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(4, 25%)',
    // background: 'pink',
    border: '1px solid blue'
  },
  photoHeaderImg: {
    height: 'auto',
    gridColumnStart: '3',
    gridColumnEnd: '6',
    gridRow: '2/5',
    // border:'1px solid red',
    position: 'relative',
    zIndex: '10'
  },
  photoHeaderTitle: {
    gridColumn: '2/5',
    gridRow: '3/4',
    // zIndex: 10,
    border:'1px solid green',
    fontSize: 12,
    fontFamily: ['Vollkorn', 'sans-serif'],
    letterSpacing: "3px",
    fontDecoration: 'italic',
    color: '#F2f2F2',
    zIndex: '12',
    textAlign: 'center'
  },
  overlay: {
    height: '100%',
    width:'100%',
    // border:'1px solid green',
    position:'absolute',
    top: 0,
    left: 0,
    zIndex: 8,
    background: 'rgb(15,15,15)'
  },
  photoHeaderArtistContainer: {
    gridColumn: '3/4',
    gridRow: '1/2',
    color: '#F2f2F2',
    textAlign: 'right',
    fontFamily: ['Inconsolata', 'sans-serif'],
    fontSize: '10px',
    // border:'1px solid green',
    paddingTop: '10%'
  },
  photo: {
    position:'absolute',
    height: '100%',
    width:'100%',
    top: 0,
    left: 0
  },
})
