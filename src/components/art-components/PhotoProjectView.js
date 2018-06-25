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
    console.log(project);
    
    return (
      <div id="photoview" className={css(styles.photoView__MainContainer)} >

        <div onClick={this.closeProjectView} className={css(styles.photoView__Header)}>
          {project.name}
        </div>

        <div className={css(styles.photoView_GridContainer)} >
          {project.content.map((content, index) => (
            <div className='row'>
            <div className="col-sm-offset-2" >
                <img
                  className={css(styles.img)}
                  src={`${content.src}`}
                  key={`${content.name} + ${index}`}
                  alt="photo"
                />
            </div>

            </div>
          ))}
        </div>

      </div>
    )
  }

  generateGridPosition = () => {
    const {project, index} = this.props
    let griddedImages = project.content.map( (photoObj, i) => {
      let indexOff 
      if (i == 0) {
        indexOff = 1
      } else {
        indexOff = i * 1
      }
      // console.log(indexOff);
      
      let randColumn = Math.floor(Math.random() * 1)+ indexOff + 10
      let randRow = Math.floor(Math.random() * 1)+ indexOff + 10
      let gridPosition = { gridRow:randRow, gridColumn: randColumn, }
      photoObj.gridPosition = gridPosition
      console.log(gridPosition);
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
    backgroundColor: '#F2F2F2',
    position: 'absolute',
    top: 0, 
    left: 0,
    display: 'flex',
    overflowY: 'scroll',
    flexDirection: 'column',
    border: '1px solid red',
  },
  photoView_GridContainer: {
    height: '100%',
    width: 'auto ',
    // display: 'grid',
    // gridTemplateColumns: 'repeat(auto, 10)',
    // gridTemplateRows: 'repeat(auto, 10)',
    border: '1px dotted lightblue',
    // background: 'lightpink'
    // marginBottom: '10vh',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  photoView__Header: {
    position:'fixed',
    marginBottom: '10vh',
    color: 'black'
  },
  img: {
    height: 'auto',
    width: 'auto',
    border: '1px dotted red',
    marginBottom: '10vh'
  }
})
