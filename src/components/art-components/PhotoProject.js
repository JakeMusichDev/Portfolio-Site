import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Photo from '../art-components/Photo'
import Waypoint from 'react-waypoint'
import '../../styles/index.css'
import WOW from 'wowjs'
import Rellax from 'rellax'

export default class PhotoProject extends Component {
  constructor(props) {
    super(props)

    this._openProject = this.openProject.bind(this)
  }

  componentDidMount() {
    const rellax_img = new Rellax(this.project, {
      wrapper: '#art-container',
      speed: 1.5,
    })
    const rellax_title = new Rellax(this.projectHeader, {
      wrapper: '#art-container',
      speed: -0.5,
    })
  }

  openProject = () => {
    const { project, index } = this.props
    
  }

  render() {
    const { project, index } = this.props
    const coverImage = project.content[0]
    return (
      <div ref={thisDiv => {this.project = thisDiv}}  className={css(styles.photoProjectContainer)}>
        <Waypoint
          key={`${project.name} + ${index} + waypoint`}
          onEnter={this.handleProjectVisibility}
          onLeave={this.handleProjectVisibility}
        />
        <div className={css(styles.photoProject)} onClick={this._openProject}>
          {project.content.map(
            (content, i) =>
              i === 0 ? (
                <div className={css(styles.headerImg)}>
                  <div ref={thisDiv => {this.projectHeader = thisDiv}} >
                    {index+1}
                  </div>
                  <Photo
                    key={`${project.name} + ${content.key} + ${i}`}
                    content={content}
                  />
                </div>
              ) : null
          )}
        </div>
      </div>
    )
  }

  handleProjectVisibility = e => {
    const { project, handleCurrentProject } = this.props
    if (e.currentPosition === 'inside') {
      handleCurrentProject(project.name)
    }
  }
}

const styles = StyleSheet.create({
  photoProjectContainer: {
    height: 'auto',
    width: '100%',
    marginBottom: '40vh',
    // border: '1px solid red',
  },
  photoProject: {
    height: 'auto',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(auto-fill, 20%)',
    // border: '1px solid lightblue',
    // background: 'lightpink'
    // marginBottom: '10vh',
    // justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerImg: {
    color: 'white',
    gridColumn: '1/5',
    gridRow: '1/4',
    cursor: 'crosshair',
    border: '1px solid red',
  },
  listImg: {
    margin: '2%',
    // gridColumn: '2/4',
    // border: '1px solid lightgreen',
    // gridRow: '4/6'
  }
})
