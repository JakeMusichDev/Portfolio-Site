import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import './../../styles/index.css'

export default class HeaderName extends Component {
  componentDidMount() {
    // Anime({
    //   targets: this.header,
    //   translateY: ['-100%'],
    //   duration: 0,
    //   opacity: 0
    // })
    Anime({
      targets: ['#header--name-text'],
      duration: 1000,
      opacity: [0, 0.7],
      easing: 'easeInExpo'
    })
  }

  render() {
    return (
      <div ref={el => {this.header = el}}  className={css(styles.titleWrapper)}>
        <Link to='/' className={css(styles.titleHeader)} id='header--name-text'>
          J - M
        </Link>
      </div>
    )
  }

  wrapMenuInSpans = (query, tag) => {
    document.querySelectorAll( query ).forEach( elem => {
      const div = document.createElement(tag);
      elem.parentElement.insertBefore(div, elem);
      div.appendChild(elem);
    });

    // /([^\x00-\x80]|\w)/g GRABS ALL INDIVIDUAL LETTERS
  }
}

const styles = StyleSheet.create({
  titleWrapper: {
    // border:'1px solid blue',
    height:'100%',
    width: '100%',
    gridColumn: '1',
    display:'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  titleHeader: {
    margin: '0 auto',
    fontFamily: ["Inconsolata", "sans-serif"],
    // width: "auto",
    // height: '100%',
    color: '#F2F2F2',
    // webkitWritingMode: 'sideways-lr',
    // writingMode: 'sideways-lr',
    fontSize:12,
    fontWeight:200,
    textDecoration:"none",
    outline:"none",
    transition:'0.3s all',
    // border:'1px solid green',
    opacity: '0.7',
    ':hover': {
      opacity: '1', 
      transform: 'translateX(5px)'
    }
  }
})
