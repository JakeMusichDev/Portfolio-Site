import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../styles/index.css'
import Anime from 'animejs'

import MenuDirectory from '../components/menu-components/MenuDirectory'


export default class Menu extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: '#appMenu--mainContainer',
      duration: 0,
      translateY: '-100%'
    }).add({
      targets: '#appMenu--mainContainer',
      duration: 500,
      easing: 'easeInQuad',
      translateY: '0%'
    })
  }

  render() {
    return (
      <div id='appMenu--mainContainer' className={css(styles.menuMainContainer)}>
        <div className={css(styles.menuList)}>
          <MenuDirectory />
        </div>
      </div>
    )
  }

  onMenuClick = (e) => {
    
  } 
}

const styles = StyleSheet.create({
  menuMainContainer: {
    height: '100vh',
    width: '100vw',
    color: 'white',
    position: 'absolute',
    background: '#2b061e',
    opacity: 0.5,
    top: 0,
    right: 0,
    border:"1px solid green",
    zIndex: 100,
  },
  menuList: {
    gridRow: '2/4',
    gridColumn: '2/3',
  }
})
