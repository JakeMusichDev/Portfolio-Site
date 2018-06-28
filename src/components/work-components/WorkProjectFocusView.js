import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

export default class WorkProjectFocusView extends Component {
  componentDidMount () {
    // this.animateIn()
  }

  render() {
    const { project, index } = this.props
    return (
      <div 
        id={`work--project-${index}`} 
        ref={ el => this.projectElement = el } 
        className={css(styles.workProject)}
      >
      </div>
    )
  }

  // animateIn = () => {
  //   this.animationIn = Anime.timeline({autoplay: true}).add({
  //     targets: this.projectElement, 
  //     duration: 0,
  //     opacity: [0],
  //   }).add({
  //     targets: this.projectElement, 
  //     duration: 2000,
  //     opacity: [1],
  //     easing: 'linear',
  //     autoplay: false,
  //     complete: () => this.setState({visible: true})
  //   })
  // }
}

const styles = StyleSheet.create({
  workProject: {
    height: '100vh',
    width: '100%',
    color: 'white',
    fontFamily: 'Inconsolata',
    display: 'grid',
    overflow: 'hidden',
    gridTemplateColumns: 'repeat(6, 15%)',
    gridTemplateRows: 'repeat(6, 15%)',
    // marginBottom: '100px',
  }
})
