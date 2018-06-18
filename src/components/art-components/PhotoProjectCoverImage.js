import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Photo from '../art-components/Photo'
import Waypoint from 'react-waypoint'
import '../../styles/index.css'
import WOW from 'wowjs'
import Anime from 'animejs'
import Rellax from 'rellax'

export default class PhotoProjectCoverImage extends Component {
  constructor(props) {
    super(props)

    this._openProject = this.openProject.bind(this)
  }

  componentDidMount() {
    // this.attachRelax()
    console.log("I've mounted ", this.props.project.content[0].title);
  }

  render() {
    const { project, index } = this.props
    const coverImage = project.content[0]

    return (
      <div
        ref={thisDiv => {
          this.project = thisDiv
        }}
        className={css(styles.photoProjectContainer)}>
        <Waypoint
          key={`${project.name} + ${index} + waypoint`}
          onEnter={this.handleProjectVisibility}
          onLeave={this.handleProjectVisibility}
        />
        <div 
          data-wow-duration="2s" 
          // data-wow-delay="5s"
          className='wow fadeInUp'
          className={css(styles.photoProject)} 
          onClick={this._openProject}
        >
          <div
            ref={thisDiv => {
              this.projectWrapper = thisDiv
            }}
            className={css(styles.photoProjectContainerWrapper)}
          />
          <div className={css(styles.headerImg)}>
            {/* <div className={css(styles.headerImgTitle)}>{index + 1}</div> */}
            <Photo
              key={`${project.name} + ${coverImage.key} + ${index}`}
              content={coverImage}
            />
          </div>
        </div>
      </div>
    )
  }

  attachRelax = () => {
    Anime({
      targets: this.projectWrapper,
      translateX: '80%',
      easing: 'easeOutExpo',
      opacity: [0],
      duration: 0,
    })
    const rellax_img = new Rellax(this.project, {
      wrapper: '#art-container',
      speed: -1,
    })
  }

  openProject = () => {
    const { project, handleOpenProject } = this.props
    handleOpenProject(project, this.project, this.projectWrapper)
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
  photoProjectContainerWrapper: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // zIndex: 8,
    // background: 'rgb(15,15,15)',
    // height: '100%',
    // width: '100%',
    // border: '1px solid lightblue',
  },
  photoProject: {
    height: '100%',
    width: 'auto ',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(auto-fill, 20%)',
    // border: '1px dotted lightblue',
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
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  listImg: {
    margin: '2%',
    // gridColumn: '2/4',
    // border: '1px solid lightgreen',
    // gridRow: '4/6'
  },
  headerImgTitle: {
    position: 'relative',
    fontSize: 20,
  },
  overlay: {
    height: '100%',
    width: '100%',
    // border:'1px solid green',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 8,
    background: 'rgb(15,15,15)',
  },
})
