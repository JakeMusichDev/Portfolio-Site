import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

export default class ScrollInstruction extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentItem } = this.props
    return (
			<div className={css(styles.scrollInstructionContainer)}>
				<span>{currentItem}. / 03</span>
			</div>
		)
  }
}

const styles = StyleSheet.create({
  scrollInstructionContainer: {
    height: '50px',
    width: '50px',
		position: 'absolute',
		top: '90vh',
		left: '10vw'
  },
})
