import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

export default class SectionCounter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentItem } = this.props
    return (
      <div className={css(styles.scrollInstructionContainer)}>
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
