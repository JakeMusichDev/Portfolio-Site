import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Routes } from '../routes/Routes'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../styles/index.css'
import AOS from 'aos'

import Header from '../components/header-components/Header'

export default class App extends Component {
  componentDidMount() {
    AOS.init()
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
    width: '100vw'
  }
})
