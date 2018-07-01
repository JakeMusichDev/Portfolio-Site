import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Waypoint from 'react-waypoint'
import Anime from 'animejs'
import AOS from 'aos'

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
  }



  render() {
    const { menuVisible, currentProject, projectOpen } = this.state
    return (
      <div id="art-container" className={css(styles.photoGrid__mainContainer)}>
        <div className={css(styles.photoGrid__projectCoverImageContainer)}>
          {photographyGridData.map(
            (project, index) => 
            currentItem === index &&(
            <PhotoProjectCoverImage
              key={`${project.name} + ${index}`}
              handleCurrentProject={this.handleCurrentProject}
              handleOpenProject={this.handleOpenProject}
              project={project}
              index={index}
            />
          ))}
        </div>
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
}

const styles = StyleSheet.create({
  photoGrid__mainContainer: {
    // height: '100vh',
    width: '100vw',
    display: 'block',
    // border: '1px solid white',
  },
  photoGrid__projectCoverImageContainer: {
    height:'100vh',
    width:'100vw',
    borderTop: '1px solid white'
  },
  photoGrid__projectViewContainer: {},
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
    opacity: 1,
  },
})
