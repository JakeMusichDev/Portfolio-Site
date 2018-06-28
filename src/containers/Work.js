import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

import { workProjectData } from '../data/work-projects.js'

import WorkProjectContainer from '../components/work-components/WorkProjectContainer'
import WorkProject from '../components/work-components/WorkProject'

export default class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      childFocusViewActive: false,
      activeIndex: 0
    }
  }

  render() {
    const projectList = workProjectData.map( (project, index) => <WorkProject key={`${project.projectName}-container`} project={project} index={index} /> )
    return (
      <div id="work--main-container" className={css(styles.workViewContainer)}>
        {projectList}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  workViewContainer: {
    height: '100vh',
    width: '100vw',
    display: 'block',
    overflowY: 'scroll',
    background: 'rgb(15, 15, 15)',
  }
})
