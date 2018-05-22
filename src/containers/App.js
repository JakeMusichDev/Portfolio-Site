import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Routes } from '../routes/Routes'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../styles/index.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}
