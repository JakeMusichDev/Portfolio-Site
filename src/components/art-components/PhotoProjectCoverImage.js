import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Photo from '../art-components/Photo'
import '../../styles/index.css'
import Rellax from 'rellax'
import Anime from 'animejs'
import Reveal from 'react-reveal/Reveal'

export default class PhotoProjectCoverImage extends Component {
  constructor(props) {
    super(props)

    this._openProject = this.openProject.bind(this)
  }

  componentDidMount() {
    this.anime = Anime.timeline().add({
      targets: this.image,
      opacity: [0, 1],
      translateX: ['100%', '0%'],
      elasticity: 0,
      easing: 'easeOutSine',
      duration: 1000,
    }).add({
      targets: this.imageWrapper,
      offset: '-=800',
      opacity: [0, 1],
      translateX: ['-100%', '0%'],
      elasticity: 0,
      easing: 'easeOutSine',
      duration: 1000
    })
  }

  componentWillUnmount() {
    this.anime.reverse()
  }

  render() {
    const { project, index, handleOpenProject } = this.props
    const coverImage = project.content[0]

    return (
      <div 
        className={css(styles.photoProjectContainer)}
      >
        <div
          
          ref={ el => this.imageWrapper = el } 
          className={css(styles.imageWrapper)}
        >
          <div 
            id='pv--cover-image'
            ref={thisDiv => { this.image = thisDiv}} 
            ref={ el => this.image = el } 
            className={css(styles.headerImg)} 
          >
            <Photo
              handleOpenProject={this.openProject}
              key={`${project.name} + ${coverImage.key} + ${index}`}
              content={coverImage}
            />
          </div>
        </div>
      </div>
    )
  }


  openProject = () => {
    const { project, handleOpenProject } = this.props
    handleOpenProject(project, this.image, this.imageWrapper)
  }
}

const styles = StyleSheet.create({
  photoProjectContainer: {
    height: '100%',
    width: '100%',
    // border: '1px solid red',
    gridRow: '2/5',
    gridColumn: '2/4',
  },
  headerImg: {
    height: 'auto',
    width: 'auto',
  },
  imageWrapper: {
    overflow: 'hidden',
    width: 'calc(100% + 1px)',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    // border: '1px solid white'
    // [breakPoints.tablet]: {
    //     width: '100vw',
    //     marginBottom: 25
    // },
    // [breakPoints.mobile]: {
    //     width: '100vw',
    //     marginBottom: 25
    // }
  },
  headerImgTitle: {
    fontSize: 20,
  },
})
