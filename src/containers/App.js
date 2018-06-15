import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Routes } from '../routes/Routes'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../styles/index.css'
import Wow from 'wowjs'

import cursorDot from '../../assets/app/Ellipse2.png'

import Header from '../components/header-components/Header'


export default class App extends Component {
  componentDidMount() {
    const wow = new Wow.WOW({
      live: false
    }).init();
  }

  render() {
    return (
      <Router>
        <div className={css(styles.app)}>
          <Header />
          <Routes />
        </div>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    display:'block',
    height:'100vh',
    width: '100vw',
    cursor: `url(${cursorDot}) 2 2, pointer`
  }
})
