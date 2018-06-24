import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import _ from 'underscore'
import Anime from 'animejs'

import PhotoProjectCoverImage from '../components/art-components/PhotoProjectCoverImage'
import PhotoHeader from '../components/art-components/PhotoHeader'
import PhotoProjectMenu from '../components/art-components/PhotoProjectMenu'
import Arrow from '../components/art-components/Arrow'
import PhotoProjectView from '../components/art-components/PhotoProjectView'

import { photographyGridData } from '../utils/data'
import { BADHINTS } from 'dns';


export default class PhotoView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      childViewOpen: false,
      currentIndex: 0, 
      direction: null,
      currentProject: photographyGridData[0]
    }

    this.handleScroll = _.throttle(this.scrollMonitor, 1000, {
      trailing: false,
    })

    this.wheel = window.addEventListener('wheel', this.handleScroll)

  }

  componentDidMount() {
    // Anime({

    // })
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.wheelEvent)
  }

  render() {
    const {currentProject, direction, currentIndex} = this.state
    return (
      <div id="photoView--mainContainer" className={css(styles.photoViewContainer)}>
        <PhotoHeader />
        <PhotoProjectCoverImage
          handleOpenProject={this.handleOpenProject}
          project={currentProject}
          direction={direction}
        />

        <PhotoProjectMenu 
          currentProject={currentProject}
          currentIndex={currentIndex}
          handleOpenProject={this.handleOpenProject}
        />
        <Arrow direction={"+"} handleNextActiveItem={this.onArrowClick} />
        <Arrow direction={"-"} handleNextActiveItem={this.onArrowClick} />

        {this.renderIndividualProjectView()}

      </div>
    )
  }

  scrollMonitor = wheelEvent => {
    const direction = wheelEvent.deltaY > 0 ? '+' : '-'
    this.setNextProject(direction)
  }
  
  onArrowClick = (e) => {
    this.setNextProject(e)
  }

  setNextProject = (direction) => {
    const { currentIndex } = this.state
    let nextItem

    if (direction === '+' && currentIndex === 11) {
      nextItem = 0
    } else if (direction === '+' && currentIndex >= 0) {
      nextItem = currentIndex + 1
    } else if (direction === '-' && currentIndex !== 0) {
      nextItem = currentIndex - 1
    } else if (direction === '-' && currentIndex === 0) {
      nextItem = 11
    } else {
      return
    }
    const currentProject = photographyGridData[currentIndex]

    this.setState({ currentIndex: nextItem, direction, currentProject })
  }

  handleOpenProject = (project, projectDiv, projectWrapper) => {
    console.log(project, projectDiv, projectWrapper)
    // this.setState({childViewOpen:true})
    const tl = Anime.timeline()
    tl
    .add({
      targets: ["#photograph"],
      opacity: 0,
      easing: 'easeOutQuart',
      duration: 300,
      complete: () =>  this.setState({childViewOpen:true})
    })
    // .add({
    //   // targets: projectDiv,
    //   // easing: 'easeOutQuart',
    //   // duration: 500,
    //   // complete: () =>  this.setState({childViewOpen:true})
    // })
  }

  renderIndividualProjectView = () => {
    const {currentProject, childViewOpen, currentIndex} = this.state
    return childViewOpen ? <PhotoProjectView index={currentIndex} project={currentProject} /> : null
  }

}

const styles = StyleSheet.create({
  photoViewContainer: {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    background: 'rgb(15,15,15)',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(5, 20%)',
    color: 'white',
  }
})
