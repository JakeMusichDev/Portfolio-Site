import React, { Component, ImageBackground } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "./../../styles/index.css"

export default class TitleHeader extends Component {
  componentDidMount() {
    Anime({
      targets:this.header,
      translateY:['-100%'],
      duration:0,
      opacity:0
    })
    Anime({
      targets:this.header,
      translateY:['0%'],
      opacity:0.7,
      duration:2000,
      delay:1000
    })
  }

  render() {
    return (
      <div className={css(styles.titleWrapper)}>
        <div ref={el => {this.header = el}} className={css(styles.titleHeader)} >
          <Link to='/' className={css(styles.titleHeader)}>
            JAKE <br/> MUSICH
          </Link>
        </div>
      </div>
    );
  }
}

//<svg className={css(styles.svg)} viewBox="0 0 350 50">
//  <text className={css(styles.text)} y="40">JAKE MUSICH</text>
//</svg>

const styles = StyleSheet.create({
  titleWrapper: {
    position:"absolute",
    width:"auto",
    paddingBottom:"10px",
    right:'10px',
    overflow:"hidden"
  },
  titleHeader: {
    color: "white",
    fontFamily:["Lato","sans-serif"],
    width:"auto",
    fontSize:14,
    fontWeight:100,
    textDecoration:"none",
    outline:"none",
    margin:'20px'
  },
  svg: {
    font:"bold 100px 'Arial'",
    width:'50%',
    height:'auto'
  },
  text:{
    fill:'none',
    stroke:"white",
    strokeWidth:"1px",
    strokeLinejoin:'round'
  }
})
