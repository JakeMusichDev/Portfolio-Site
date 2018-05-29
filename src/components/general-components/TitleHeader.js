import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import './../../styles/index.css'

export default class TitleHeader extends Component {
  componentDidMount() {
    Anime({
      targets: this.header,
      translateY: ['-100%'],
      duration: 0,
      opacity: 0
    })
    Anime({
      targets: this.header,
      translateY: ['0%'],
      opacity: 0.7,
      duration: 2000,
      delay: 1000
    })
  }

  render() {
    return (
      <div className={css(styles.titleWrapper)}>
        <div ref={el => {this.header = el}} className={css(styles.titleHeader)} >
          <Link to='/' className={css(styles.titleHeader)}>
            JAKE MUSICH
          </Link>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  titleWrapper: {
    width:"auto",
    overflow:"hidden",
    border:'1px solid blue',
    marginTop:'5vh'
  },
  titleHeader: {
    color: "black",
    fontFamily:["Lato","sans-serif"],
    width:"auto",
    fontSize:14,
    fontWeight:100,
    textDecoration:"none",
    outline:"none",
    // transition:'0.3s all',
    // ':hover': {
    //   color:'blue'
    // }
  }
})
