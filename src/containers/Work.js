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

  render() {
    const { childFocusViewActive } = this.state
    const projectList = workProjectData.map( (project, index) => <WorkProject key={`${project.projectName}-container`} handleActiveProject={this.handleActiveProject} project={project} index={index} /> )
    return (
      <div id="work--main-container" className={css(styles.workViewContainer)}>
        {
          childFocusViewActive ? (
            <WorkProjectFocusView />
          ) : (
            null
          )
        }
        {projectList}

      </div>
    )
  }

  handleActiveProject = e => {
    this.setState({
      activeProject: e,
      childFocusViewActive:true
    })
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
