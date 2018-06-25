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
      translateY: '-10vh'
    }).add({
      targets: '#appMenu--mainContainer',
      duration: 1000,
      easing: 'easeInQuad',
      translateY: '10vh'
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
}

const styles = StyleSheet.create({
  menuMainContainer: {
    height:'10vh',
    width: '10vw',
    color: 'white',
    position: 'absolute',
    background: 'rbga(10, 10, 10, 0.3)',
    top: 0, 
    right: 0,
    // border:"1px solid  green",
    zIndex: 100,
    display: 'grid',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(5, 20%)',
  },
  menuList: {
    gridRow: '2/4',
    gridColumn: '2/3',
  }
})
