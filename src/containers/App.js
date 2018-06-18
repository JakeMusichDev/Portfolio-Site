import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../styles/index.css'
import Wow from 'wowjs'
import cursorDot from '../../assets/app/Ellipse2.png'

import Menu from './Menu'
import Header from '../components/header-components/Header'
import { Routes } from '../routes/Routes'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuActive:false
    }
  }
  componentDidMount() {
    const wow = new Wow.WOW({
      live: true
    }).init();
  }

  render() {
    const { menuActive } = this.state
    return (
      <Router>
        <div className={css(styles.app)}>
          <Header handleMenuActiveState={this.handleMenuActiveState} />
          <Routes />
          <Menu menuActive={menuActive} />
        </div>
      </Router>
    )
  }

  handleMenuActiveState = e => {
    this.setState({menuActive: !this.state.menuActive})
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
