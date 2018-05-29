import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

export default class ScrollInstruction extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentItem, direction } = this.state
    const { onSectionClick } = this.props

    return (
			<div className={css(styles.scrollInstructionContainer)}>
				
			</div>
		)
  }
}

const styles = StyleSheet.create({
  scrollInstructionContainer: {
    height: '100vh',
    width: '100vw',
    border: '1px solid white',
  },
})
