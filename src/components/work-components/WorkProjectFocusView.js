import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

import xButton from '../../../assets/x.svg'

export default class WorkProjectFocusView extends Component {
  componentDidMount () {
    this.animateIn()
  }

  render() {
    const { project, index } = this.props
    return (
      <div 
        id={`work--project-${index}`} 
        ref={ el => this.projectElement = el } 
        className={css(styles.workProject)}
      >
        <div onClick={this.close} className={css(styles.closeButton)}><img src={`${xButton}`} alt=""/></div>
        <div className={css(styles.projectName)}>{project.projectName}</div>
      </div>
    )
  }

  animateIn = () => {
    this.animationIn = Anime.timeline({autoplay: true}).add({
      targets: this.projectElement, 
      duration: 0,
      opacity: [0]
    }).add({
      targets: this.projectElement, 
      duration: 500,
      opacity: [1],
      easing: 'linear',
      autoplay: true,
    })
  }

  animateOut = () => {
    const _this = this
    this.animationIn = Anime.timeline({autoplay: true}).add({
      targets: this.projectElement, 
      duration: 300,
      opacity: [0],
      easing: 'linear',
      complete: () => _this.props.close()
    })
  }

  close = () => {
    this.animateOut()
  }

}

const styles = StyleSheet.create({
  workProject: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
    color: 'white',
    background: 'rgba(15,15,15,0.8)',
    zIndex: 10,
    overflowX: 'scroll',
    fontFamily: 'Inconsolata',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 15%)',
    gridTemplateRows: 'repeat(6, 15%)',
  },
  closeButton: {
    height: 100,
    width: 100,
    display:'flex',
    top: '20vh',
    position: 'fixed',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    border: '1px solid pink'
  },
  projectName: {
    height: 'auto',
    width: 100,
    top: '20vh',
    display:'flex',
    right: 0,
    position: 'fixed',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    border: '1px solid pink'
  }
})
