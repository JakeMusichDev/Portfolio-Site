import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "./../../styles/index.css"

export default class TitleHeader extends Component {
  componentDidMount() {
    Anime({
      targets:this.header,
      translateY:['-100%'],
      duration:0
    })
    Anime({
      targets:this.header,
      translateY:['0%'],
      duration:2000,
      delay:1000
    })
  }

  render() {
    return (
      <div className={css(styles.titleWrapper)}>
        <div ref={el => {this.header = el}} className={css(styles.titleHeader)}>
          {" JAKE MUSICH "}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  titleWrapper: {
    position:"absolute",
    // border:"1px solid red",
    width:"auto",
    paddingBottom:"10px",
    top:"50px",
    marginLeft:'50px',
    overflow:"hidden"
  },
  titleHeader: {
    color: "black",
    fontFamily:["Source Sans Pro","sans-serif"],
    width:"auto",
    fontSize:24,
    fontWeight:100,
    letterSpacing:"1px"
  },
})
