import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Anime from 'animejs'

export default class ArtHomeview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      childViewOpen: false,
      currentChildView: null
    }

    // this._handleMenuEnter = this.handleMenuEnter.bind(this)
    // this._handleMenuLeave = this.handleMenuLeave.bind(this)
  }

  render() {
    const { menuVisible, currentProject } = this.state
    return (
      <div className={css(styles.photoGrid__mainContainer)}>

      </div>
    )
  }

}

const styles = StyleSheet.create({
  photoGrid__mainContainer: {
    height: '100%',
    width: '100%',
    display: 'grid',
    // border:'1px solid green',
    marginTop: '80vh',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(5, 20%)',
    background: 'rgb(15,15,15)',
  },
  photoGrid__projectCoverImageContainer: {
    gridColumn: '2/6',
    gridRow: '1/6',
    // overflowY: 'scroll',
    // border: '1px solid blue',
    // background:'yellow'
    // height:'100%',
    // width:'100%'
    background: 'rgb(15,15,15)',
  },
  photoGrid__projectViewContainer: {
    color: '#F2f2F2',
  },
  photoGrid__projectMenu: {
    position: 'fixed',
    height: '10vh',
    width: '20%',
    // border:'1px solid pink',
    top: '40vh',
    // background: 'rgb(15,15,15)',
    color: '#F2f2F2',
    textAlign: 'center',
    fontFamily: ['Inconsolata', 'sans-serif'],
    fontSize: '10px',
    transition: '0.5s opacity',
  },
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0,
  },
})
