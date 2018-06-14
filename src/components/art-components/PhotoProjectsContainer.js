import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Waypoint from 'react-waypoint'
import Anime from 'animejs'

import PhotoProjectCoverImage from './PhotoProjectCoverImage'
import PhotoProjectView from './PhotoProjectView'

import { photographyGridData } from '../../utils/data'

export default class PhotoProjectsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuVisible: false,
      projectOpen: false,
      currentProject: null,
    }

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
          {currentProject ? currentProject.title: null } <br /> 01 / 10  <br />
          I I I I I I I
        </div>
        <Waypoint
          key={'waypoint-menu'}
          onEnter={this._handleMenuEnter}
          onLeave={this._handleMenuLeave}
        />
        {this.renderCoverImageList()}
      </div>
    )
  }

  renderCoverImageList = () => {
    const { projectOpen, currentProject } = this.state

    if (!projectOpen) {
      return (
        <div className={css(styles.photoGrid__projectCoverImageContainer)}>
          {photographyGridData.map((project, index) => (
            <PhotoProjectCoverImage
              key={`${project.name} + ${index}`}
              handleCurrentProject={this.handleCurrentProject}
              handleOpenProject={this.handleOpenProject}
              project={project}
              index={index}
            />
          ))}
        </div>
      )
    } else {
      return (
        <div className={css(styles.photoGrid__projectViewContainer)}>
          <PhotoProjectView
            handleCloseProject={this.handleCloseProject}
            project={currentProject}
          />
        </div>
      )
    }
  }

  handleCurrentProject = e => {
    this.setState({ currentProject: e })
  }

  handleOpenProject = (currentProject, img, imgWrapper) => {
    const tl = Anime.timeline()
    tl
    // .add({
    //   // targets: ["art-container"],
    //   // scrollTop: 1000,
    //   // translateX: '0%',
    //   // easing: 'easeInQuart',
    //   // duration: 800
    // })
    .add({
      targets: imgWrapper,
      translateX: '0%',
      easing: 'easeOutQuart',
      opacity: [1],
      duration: 500,
      complete: () => this.setState({ currentProject, projectOpen: true }),
    })
  }

  handleCloseProject = () => {
    this.setState({ currentProject:null, projectOpen: false })
  }

  lockViewportScroll = () => {
    var winTop = document.getElementById('art-container')
    // var flow = this.state.open ? 'hidden' : 'scroll'
    // winTop.style.overflowY = flow
  }

  handleMenuEnter = e => {
    if (!this.state.menuVisible && e.currentPosition === 'inside') {
      this.setState({ menuVisible: true })
    }
  }

  handleMenuLeave = e => {
    if (
      this.state.menuVisible &&
      e.currentPosition === 'below' &&
      e.previousPosition === 'inside'
    ) {
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
