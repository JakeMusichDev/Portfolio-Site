import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

export default class ScrollInstruction extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const tl = Anime.timeline({loop: true})
    tl.add({
      targets: this.line,
      translateY: '-105%',
      duration: 2000,
      easing: 'easeOutQuint'
    })
  }

  render() {
    return (
			<div className={css(styles.scrollInstructionContainer)}>
        <div className={css(styles.scrollInstruction)}>
				  SCROLL
        </div>
        <div className={css(styles.lineWrapper)}>
          <div ref={el => this.line = el}className={css(styles.line)}>
            <svg width="2" height="30" viewBox="0 0 2 96" fill="none">
              <line id='scroll-line' y1="-0.5" x2="95" y2="-0.5" transform="translate(1.5 95.5) rotate(-90)" stroke="black"/>
            </svg>
          </div>
        </div>
			</div>
		)
  }
}

const styles = StyleSheet.create({
  scrollInstructionContainer: {
    height: '60px',
    width: 'auto',
		position: 'absolute',
    top: '90vh',
    fontFamily: ['Lato', 'sans-serif'],
    left: '10vw',
    fontSize:14,
    fontWeight: 300,
    // border:'1px solid blue'
  },
  lineWrapper: {
    // border:'1px solid pink',
    height: '60%',
    width: '100%',
    overflow: 'hidden'
  },
  line: {
    // border:'1px solid purple',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:"center",
    alignItems: 'center'
  }
})
