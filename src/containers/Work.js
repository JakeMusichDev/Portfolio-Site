import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

import { workProjectData } from '../data/work-projects.js'

import WorkProjectFocusView from '../components/work-components/WorkProjectFocusView'
import WorkProject from '../components/work-components/WorkProject'

export default class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeProject: null,
      childFocusViewActive: false,
      activeIndex: 0,
    }
  }

  componentWillUnmount() {
    this.closeActiveProject()
  }

  render() {
    const { childFocusViewActive, activeProject } = this.state
    const projectList = workProjectData.map( (project, index) => <WorkProject key={`${project.projectName}-container`} handleActiveProject={this.handleActiveProject} project={project} index={index} /> )
    return (
      <div id="work--main-container" ref={ ref => this.workContainer = ref }  className={css(styles.workViewContainer)}>
        {childFocusViewActive ? (
          <WorkProjectFocusView project={activeProject} close={this.closeActiveProject} />
        ) : (
          null
        )}

        {projectList}

      </div>
    )
  }

  handleActiveProject = e => {
    this.lockView(true)
    this.setState({
      activeProject: e,
      childFocusViewActive:true
    })
  }

  closeActiveProject = e => {
    this.lockView(false)
    this.setState({
      activeProject: null,
      childFocusViewActive:false,
    })
  }

  lockView = (lockBool) => {
    let flowStyle = lockBool ? 'hidden' : 'scroll'
    console.log(lockBool);
    
    this.workContainer.style.overflowY = flowStyle
  }

}

const styles = StyleSheet.create({
  workViewContainer: {
    height: '100vh',
    width: '100vw',
    display: 'block',
    overflowY: 'scroll',
    background: '#211a1d',
  }
})
