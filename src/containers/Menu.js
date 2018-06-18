import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Routes } from '../routes/Routes'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../styles/index.css'
import Wow from 'wowjs'

import cursorDot from '../../assets/app/Ellipse2.png'



export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive:false
    }
  }
  componentDidMount() {
    const wow = new Wow.WOW({
      live: false
    }).init();
  }

  render() {
    return (
      <div className={css(styles.menuMainContainer)}>
      
      </div>
    )
  }

  handleMenuOpen
}

const styles = StyleSheet.create({
  menuMainContainer: {
    display:'block',
    height:'100vh',
    width: '100vw',
    cursor: `url(${cursorDot}) 2 2, pointer`
  }
})
