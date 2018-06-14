import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Photo from '../art-components/Photo'
import Waypoint from 'react-waypoint'
import '../../styles/index.css'
import WOW from 'wowjs'
import Anime from 'animejs'
import Rellax from 'rellax'

export default class PhotoProjectView extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.grid = this.generateGridPosition()

  }

  componentDidMount() {
    this.animeSetup()
  }

  render() {
    const { project, index } = this.props
    return (
      <div id="photoview" className={css(styles.photoView__MainContainer)} >

        <div onClick={this.closeProjectView} className={css(styles.photoView__Header)}>
          {project.title}
        </div>

        <div className={css(styles.photoView_GridContainer)} >
          {this.grid.map((content, index) => (
            <div style={content.gridPosition}>
              <Photo
                key={`${project.name} + ${index}`}
                content={content}
              />
            </div>
          ))}
        </div>

      </div>
    )
  }

  generateGridPosition = () => {
    const {project, index} = this.props
    let griddedImages = project.content.map( photoObj => {
      let randColumn = Math.floor(Math.random() * 11)
      let randRow = Math.floor(Math.random() * 11)
      let gridPosition = {gridRow:randRow, gridColumn: randColumn }
      photoObj.gridPosition = gridPosition
      return photoObj
    })
    return griddedImages
  }

  animeSetup = () => {
    const tl = Anime.timeline()
    tl.add({
      targets: ["#photoview"],
      translateY: '-100%',
      duration: 0,
    }).add({
      targets: ["#photoview"],
      translateY: '0%',
      opacity: [0,1],
      duration: 800,
      easing: 'easeInQuart'
    })
  }

  closeProjectView = () => {
    const { project, handleCloseProject } = this.props
    handleCloseProject()
  }
}

const styles = StyleSheet.create({
  photoView__MainContainer: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'black',
    position: 'absolute',
    top: 0, 
    left: 0,
    display: 'flex',
    overflowY: 'scroll',
    flexDirection: 'column'
    // border: '1px solid red',
  },
  photoView_GridContainer: {
    height: '100%',
    width: 'auto ',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto, 10)',
    gridTemplateRows: 'repeat(auto, 10)',
    border: '1px dotted lightblue',
    // background: 'lightpink'
    // marginBottom: '10vh',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  photoView__Header: {
    position:'fixed',
    marginBottom: '10vh'
  }
})
