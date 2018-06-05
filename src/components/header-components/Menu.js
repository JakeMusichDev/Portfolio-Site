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
      opacity: 1,
      duration: 1500,
    })
  }

  render() {
    return (
      <div  ref={el => {this.header = el}}  className={css(styles.titleWrapper)}>
        <div className={css(styles.titleHeader)} >
          MENU
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  titleWrapper: {
    // width:"20%",
    overflow:"hidden",
    border:'1px solid blue',
    height:'100%',
    marginLeft: '10%',
    // display:'flex',
    // flexDirection: 'column',
    // alignContent: 'center',
    // justifyContent: 'center'
  },
  titleHeader: {
    color: 'black',
    fontFamily: ["Lato", "sans-serif"],
    width: "auto",
    height: '100%',
    fontSize:16,
    fontWeight:300,
    textDecoration:"none",
    outline:"none",
    transition:'0.3s all',
    border:'1px solid green',
    ':hover': {
      color:'blue'
    }
  }
})
