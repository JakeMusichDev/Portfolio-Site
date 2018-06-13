import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Waypoint from 'react-waypoint'

import PhotoProject from './PhotoProject'
import { photographyGridData } from '../../utils/data'

export default class PhotoGrid extends Component {
  constructor(props) {
    super(props)

    this.state = { menuVisible: false, currentProject: null }
    this._handleMenuEnter = this.handleMenuEnter.bind(this)
    this._handleMenuLeave = this.handleMenuLeave.bind(this)
  }

  render() {
    const { menuVisible, currentProject } = this.state
    
    const menuStyle = menuVisible
      ? [styles.photoGrid__projectMenu, styles.active]
      : [styles.photoGrid__projectMenu, styles.inactive]
    return (
      <div className={css(styles.photoGrid__mainContainer)}>
        <div className={css(menuStyle)}>
          01. 10 / {currentProject} <br /> <br />
          I I I I I I I
        </div>
        <Waypoint
          key={'waypoint-menu'}
          onEnter={this._handleMenuEnter}
          onLeave={this._handleMenuLeave}
        />
        <div className={css(styles.photoGrid__projectContainer)}>
          {photographyGridData.map((project, index) => (
            <PhotoProject
              key={`${project.name} + ${index}`}
              handleCurrentProject={this.handleCurrentProject}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    )
  }

  handleCurrentProject = e => {
    this.setState({ currentProject: e })
  }

  handleMenuEnter = e => {
    console.log(e);
    if(!this.state.menuVisible && e.currentPosition === 'inside') {
      this.setState({ menuVisible: true })
    }
  }

  handleMenuLeave = e => {
    console.log("exit ", e.currentPosition, e.previousPosition);
    if (this.state.menuVisible && e.currentPosition === 'below' && e.previousPosition === "inside") {
      // this.setState({ menuVisible: false })
    }
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
  photoGrid__projectContainer: {
    gridColumn: '2/6',
    gridRow: '1/6',
    // overflowY: 'scroll',
    // border: '1px solid blue',
    // background:'yellow'
    // height:'100%',
    // width:'100%'
    background: 'rgb(15,15,15)',
  },
  photoGrid__projectMenu: {
    position: 'fixed',
    height: '10vh',
    width: '20%',
    color: '#F2F2F2',
    // border:'1px solid pink',
    top: '40vh',
    background: 'rgb(15,15,15)',
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
