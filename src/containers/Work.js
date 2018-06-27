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

  // componentDidMount() {
  //   Anime({
  //     targets: '#workView--mainContainer',
  //   })
  // }

  render() {
    // const projectList = 
    return (
      <div id="work--main-container" className={css(styles.workViewContainer)}>
        {/* <WorkProjectContainer data={workProjectData} /> */}
        <div className={css(styles.title)}>
          Development Projects 
        </div>
        {workProjectData.map( (project, index) => <WorkProject key={`${project.projectName}-container`} project={project} index={index} /> )}

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
    // gridTemplateColumns: 'repeat(6, 15%)',
    // gridTemplateRows: 'repeat(6, 15%)',
    background: 'rgb(15, 15, 15)',
  },
  title: {
    width: 100,
    height: 100,
    position: "fixed",
    top: 500
  }
})
