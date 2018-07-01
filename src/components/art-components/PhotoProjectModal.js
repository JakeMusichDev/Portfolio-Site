import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Anime from 'animejs'

import PhotoModalGrid from './PhotoModalGrid'
import PhotoModalName from './PhotoModalName'

export default class PhotoProjectModal extends Component {

  componentDidMount() {
    this.setAnimation()
    this.animTimeline.play()
  }

  render() {
    const { project, index } = this.props    
    return (
      <div id="photoview-focus" className={css(styles.photoView__MainContainer)} >
        <PhotoModalName name={project.name} close={this.closeProjectView} />
        <PhotoModalGrid gridData={project.content} />
      </div>
    )
  }

  setAnimation = () => {
    const container = document.getElementById("photoview-focus")
    this.animTimeline = Anime.timeline({autoplay:false}).add({
      targets: container,
      opacity: 0,
      duration: 0,
    }).add({ 
      targets: [container],
      opacity: [1],
      duration: 1000,
      easing: 'linear'
    })
  }

  closeProjectView = () => {    
    this.animTimeline.play()
    const { project, handleCloseProject } = this.props
    // handleCloseProject()
  }

}

const styles = StyleSheet.create({
  photoView__MainContainer: {
    height: '100vh',
    width: '100vw',
    // backgroundColor: '#211a1d',
    background: 'rgb(15,15,15)',
    position: 'absolute',
    top: 0, 
    left: 0,
    display: 'block',
    overflowY: 'scroll',
  },
  closeButton: {
    color: 'white',
    top: 100,
    left: 1000,
    zIndex: 100,
    position:"absolute"
  }
})
