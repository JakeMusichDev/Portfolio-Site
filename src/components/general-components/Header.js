import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "./../../styles/index.css"

import TitleHeader from './TitleHeader'

export default class Header extends Component {
  componentDidMount() {
    // Anime({
    //   targets:this.header,
    //   translateY:['-100%'],
    //   duration:0,
    //   opacity:0
    // })
    // Anime({
    //   targets:this.header,
    //   translateY:['0%'],
    //   opacity:1,
    //   duration:2000,
    //   delay:1000
    // })
  }

  render() {
    return (
      <div className={css(styles.headerWrapper)}>
        <div
          ref={el => {this.header = el}}
          className={css(styles.header)}
        >
          <TitleHeader />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  // titleWrapper: {
  //   position:"absolute",
  //   width:"auto",
  //   paddingBottom:"10px",
  //   top:"50px",
  //   marginLeft:'50px',
  //   overflow:"hidden"
  // },
  // titleHeader: {
  //   color: "white",
  //   fontFamily:["Lato","sans-serif"],
  //   width:"auto",
  //   fontSize:14,
  //   fontWeight:100,
  //   // letterSpacing:"1px"
  // },
  // svg: {
  //   font:"bold 100px 'Arial'",
  //   width:'50%',
  //   height:'auto'
  // },
  // text:{
  //   fill:'none',
  //   stroke:"white",
  //   strokeWidth:"1px",
  //   strokeLinejoin:'round'
  // }
})
