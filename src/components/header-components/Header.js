import React, { Component, ImageBackground } from 'react'
import { withRouter } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "./../../styles/index.css"

import HeaderName from './HeaderName'
import HeaderMenu from './HeaderMenu'

class Header extends Component {
  render() {
    return this.renderHeader()
  }
  
  //-----------------------------
  // If current route isn't home page, render menu 
  //-----------------------------
  renderHeader = () => {
    const { location } = this.props
    if(location.pathname !== '/') {
      return (
        <div className={css(styles.headerWrapper)}>
        <HeaderName />
        <HeaderMenu />
      </div>
    )} else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: '10vh',
    width: '100vw',
    display: 'grid',
    gridTemplateRows: 'repeat(1, 1fr)',
    gridTemplateColumns: 'repeat(10, auto)',
    position: 'absolute',
    top:0,
    left:0,
  }
})

const HeaderWithRouter = withRouter(Header)
export default HeaderWithRouter