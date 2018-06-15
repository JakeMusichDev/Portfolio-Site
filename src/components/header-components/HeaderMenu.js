import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import './../../styles/index.css'
import circleSvg from '../../../assets/header-menu-circle.svg'

export default class HeaderMenu extends Component {
  constructor(props) {
    super(props)

    // this._handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    Anime({
      targets: this.header,
      duration: 1000,
      opacity: [0, 1],
      easing: 'easeInExpo'
    })
  }

  render() {
    return (
      <div 
        ref={el => {this.header = el}} 
        className={css(styles.titleWrapper)}
        onMouseEnter={this.handleEnter}
        onMouseMove={this.handleMove}
        onMouseLeave={this.handleExit}
      >
        <div 
          onClick={this.handleMenuClick}
          className={css(styles.titleHeader)} >
          <img id='header--menu-circle' src={circleSvg} alt=""/>
        </div>
      </div>
    )
  }

  handleEnter = e => {
    Anime({
      targets: ["#header--menu-circle"],
      easing: 'easeInSine',
      duration: 1000
    })
  }

  handleMove = e => {
    const mouseX = e.screenX / 10
    const mouseY = e.screenY / 10
    // Anime({
    //   targets: ["#header--menu-circle"],
    //   easing: 'easeInSine',
    //   translateX: mouseX,
    //   translateY: mouseY,
    //   duration: 1000
    // })
  }

  handleExit = e => {

  }
  
  handleMenuClick = e => {
    // this.props.openMenu()
  }
}



const styles = StyleSheet.create({
  titleWrapper: {
    height:'100%',
    gridColumn: '11',
    display:'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  titleHeader: {
    margin: '0 auto',
    transition:'0.3s all',
    ':hover': {
      // transform: 'translateX(-5px)',
      transform: 'scale(1.1)'
    }
  }
})
