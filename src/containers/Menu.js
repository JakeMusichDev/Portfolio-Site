import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Routes } from '../routes/Routes'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../styles/index.css'
import Anime from 'animejs'


export default class Menu extends Component {
  componentDidMount() {
    Anime({
      targets: '#appMenu--mainContainer',
      opacity: [0,1],
      duration: 1000
    })

  }

  

  render() {
    const { menuActive } = this.props
    // const menuStyle = menuActive ? 
    //   css([styles.menuMainContainer, styles.active]) :
    //   css([styles.menuMainContainer, styles.inactive]) 
    if(menuActive) {
      return (
        <div id='appMenu--mainContainer' className={css(styles.menuMainContainer)}>
          <div className={css(styles.expandingBackground)}></div>
          <div className={css(styles.menuList)}>MENU</div>
        </div>
      )
    } else {
      return null
    }
  }

  handleMenuOpen = () => {
    const animTimeline = Anime.timeline()
    animTimeline.add({
      targets: '#expanding-bg',
      translateZ: 0,
      scale: [0, 100],
      duration: 800,
      easing: 'easeOutSine'
    }).add({

    })
  }

  handleMenuItemClick = () => {

  }
}

const styles = StyleSheet.create({
  menuMainContainer: {
    height:'20vh',
    width: '20vw',
    color: 'white',
    position: 'absolute',
    background: '#10069F',
    top: 0, 
    left: 0,
    opacity: 1,
    border:"1px solid  green"
  },
  expandingBackground: {
    // background: colors.primary,
    display: 'none',
    borderRadius: '50%',
    transform: 'scale(0)',
    width: 50,
    height: 50,
    position: 'absolute',
    pointerEvents: 'none',
  },
  active: {
    display: 'block'
  },
  inactive: {
    display: 'none'
  }
})
