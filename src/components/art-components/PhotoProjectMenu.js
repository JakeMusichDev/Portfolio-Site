import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import '../../styles/index.css'

export default class PhotoProjectMenu extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const tl = Anime.timeline()
    tl.add({
      targets: this.menu,
      opacity: 0,
      duration: 0,
      scale: 0.8,
      translateX: '100%',
    }).add({
      targets: this.menu,
      opacity: [0.9],
      duration: 1000,
      elasticity: 0,
      translateX: '0%',
      easing: 'easeInExpo',
      delay: 400,
      scale: 1
    })
  }

  render() {
    const { currentProject, currentIndex, handleOpenProject} = this.props
    return (
      <div ref={ref => {this.menu = ref}}  className={css(styles.scrollInstructionContainer)}>
        <div className={css(styles.scrollInstruction)}>{currentIndex + 1}. / 11</div>
        <div onClick={handleOpenProject} className={css(styles.menuProjectTitle)}>
          {currentProject.name}
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  scrollInstructionContainer: {
    height: 'auto',
    width: '100%',
    display:'block',
    gridColumn: '4/6',
    gridRow: '4/5',
    // border: '1px solid blue',
    alignSelf: 'end',
    fontFamily: ['Inconsolata', 'sans-serif'], 
    color: '#F2F2F2',
    fontSize: '0.5rem',
  },
  scrollInstruction: {
    width: 'auto',
  },
  menuProjectTitle: {
    // border: '1px solid red',
    fontSize: '1.5rem',
    fontFamily: ['Vollkorn', 'serif'], 
    cursor: 'pointer'
  }
})
