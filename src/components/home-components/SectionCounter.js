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
        <span>{currentItem + 1}. / 03</span>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  scrollInstructionContainer: {
    height: '50px',
    width: '80px',
    position: 'absolute',
    top: '90vh',
    fontFamily: ['Vollkorn', 'sans-serif'],
    left: '80vw',
  },
})
