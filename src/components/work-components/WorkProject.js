import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import _ from 'underscore'
import Utils from '../../utils/functions.js'

import WorkProjectDescription from './WorkProjectDescription'
import WorkProjectName from './WorkProjectName'
import WorkProjectImage from './WorkProjectImage'
import WorkProjectRole from './WorkProjectRole'

export default class WorkProject extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visible:false
    }
    this.isInViewport_throttled = _.throttle(this.isInViewport, 300, {trailing: false})
  }
  
  componentWillMount () {
    // this.wheelEvent = window.addEventListener('wheel', this.isInViewport_throttled.bind(this), false)
  }

  componentWillUnmount() {
    // window.removeEventListener('wheel', this.isInViewport_throttled, false)
  }
  

  render() {
    const { project, index } = this.props
    return (
      <div 
        id={`work--project-${index}`} 
        ref={ el => this.projectElement = el } 
        className={css(styles.workProject)}
      >
        <WorkProjectImage image={project.images.desktop} movie={project.movie} onOpen={this.onOpenProject} />
        <WorkProjectName svg={project.images.nameSvg} onOpen={this.onOpenProject} />
        <WorkProjectDescription description={project.description} />
        <WorkProjectRole role={'developer'} />
      </div>
    )
  }

  onOpenProject = (e) => {
    const { handleActiveProject, project } = this.props
    handleActiveProject(project)
  }


  isInViewport = (e) =>  {
    const { index } = this.props
    const el = document.getElementById(`work--project-${index}`)
    var util = new Utils()
    let projectVisibleInViewport = util.isElementInView(el, false)
    
    if(projectVisibleInViewport && !this.state.visible) {
      // this.animateIn()
    }
  }

  animateIn = () => {
    this.animationIn = Anime.timeline({autoplay: true}).add({
      targets: this.projectElement, 
      duration: 0,
      opacity: [0],
    }).add({
      targets: this.projectElement, 
      duration: 2000,
      opacity: [1],
      easing: 'linear',
      autoplay: false,
      complete: () => this.setState({visible: true})
    })
  }
}

const styles = StyleSheet.create({
  workProject: {
    height: '100vh',
    width: '100%',
    color: 'white',
    fontFamily: 'Inconsolata',
    display: 'grid',
    overflow: 'hidden',
    gridTemplateColumns: 'repeat(6, 15%)',
    gridTemplateRows: 'repeat(6, 15%)',
    // marginBottom: '100px',
  }
})
