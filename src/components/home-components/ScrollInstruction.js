import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

export default class ScrollInstruction extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
			<div className={css(styles.scrollInstructionContainer)}>
				SCROLL
			</div>
		)
  }
}

const styles = StyleSheet.create({
  scrollInstructionContainer: {
    height: '100px',
    width: '100px',
		border: '1px solid black',
		position: 'absolute',
		top: '0',
		left: '0'
  },
})
