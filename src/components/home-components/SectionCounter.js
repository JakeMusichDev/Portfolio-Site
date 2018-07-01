import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

export default class SectionCounter extends Component {
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
      translateX: '-100%',
    }).add({
      targets: this.menu,
      opacity: [0.9],
      duration: 1500,
      elasticity: 0,
      translateX: '0%',
      easing: 'easeInQuint',
      delay: 400,
      scale: 1
    })
  }
  
  render() {
    const { currentItem } = this.props
    return (
      <div className={css(styles.scrollInstructionContainer)} ref={ref=> {this.menu = ref}}>
        <span className={css(styles.scrollInstruction)}>{currentItem + 1}. / 03</span>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  scrollInstructionContainer: {
    height: '100%',
    width: '100%',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '5',
    gridRowEnd: '6',
  },
  scrollInstruction: {
    display:'flex',
    fontSize: '12px',
    width: 'auto',
    color: '#F2F2F2',
    fontFamily: ['Inconsolata', 'sans-serif'],
  }
})
