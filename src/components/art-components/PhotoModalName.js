import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Photo from '../art-components/Photo'
import '../../styles/index.css'
import Anime from 'animejs'
import Fade from 'react-reveal/Fade';

export default class PhotoModalName extends Component {
  componentDidMount() {
    // this.animateIn()
  }

  render() {
    const { name, close } = this.props    
    return (
      <div className={css(styles.modalNameContainer)}>
        <div className={css(styles.modalNameWrapper)}>
          <Fade bottom cascade>
            <div id="photo-project--name" className={css(styles.modalName)}>{ name }</div>
          </Fade>
        </div>
        <Fade>
          <div className={css(styles.date)}>
            2018 - 
          </div>
        </Fade>
      </div>
    )
  }

  animateIn = () => {
    Anime.timeline().add({
      targets: '#photo-project--name',
      translateY: "100%",
      duration: 0,
      opacity: 0
    }).add({
      targets: '#photo-project--name',
      translateY: "0%",
      duration: 1000,
      elasticity: 100,
      opacity: 1,
      // delay: 1000,
      easing: 'easeInQuad',
    })
  }
}

const styles = StyleSheet.create({
  modalNameContainer: {
    width: '100%',
    height: '50vh',
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: 'repeat(4, 1fr)'
  },
  modalNameWrapper: {
    overflow: 'hidden',
    gridColumn: '1/9',
    gridRow: '3/4',
  }, 
  modalName: {
    textAlign: 'center',
    fontFamily: ['Vollhorn', 'serif'],
    color: '#F2F2F2',
    fontSize: 100
  },
  date: {
    color: '#F2F2F2',
    fontFamily: 'Inconsolata',
    width: '100%',
    textAlign: 'center',
    gridColumn: '7/8',
    gridRow: '4/5',
    // border: '1px solid red'
  }
})
