import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Anime from 'animejs'

import PhotoModalGrid from './PhotoModalGrid'
import PhotoModalName from './PhotoModalName'

export default class PhotoProjectModal extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.grid = this.generateGridPosition()
  }

  componentDidMount() {
    this.animateIn()
  }

  render() {
    const { project, index } = this.props
    console.log(project);
    
    return (
      <div id="photoview-focus" className={css(styles.photoView__MainContainer)} >

        <PhotoModalName name={project.name} close={this.closeProjectView} /> 

        <div id='photoview-focus-grid' className={css(styles.photoView_GridContainer)} >
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
      let indexOffset = i ===  0 ? 1 : i*1
      let randColumn = Math.floor(Math.random() * 1)+ indexOffset + 10
      let randRow = Math.floor(Math.random() * 1)+ indexOffset + 10
      let gridPosition = { gridRow:randRow, gridColumn: randColumn, }
      photoObj.gridPosition = gridPosition
      console.log(gridPosition);
      return photoObj
    })
    return griddedImages
  }

  animateIn = () => {
    const container = document.getElementById("photoview-focus")
    const gridContainer = document.getElementById("photoview-focus-grid")
    console.log('====================================');
    console.log(gridContainer.children)
    console.log('====================================');

    const tl = Anime.timeline()
    tl.add({ 
      targets: [container, gridContainer.children],
      opacity: 0,
      duration: 0,
      translateY: '100%',
    })
    // .add({ 
    //   targets: gridContainer.children,
    //   // translateY: '-100%',
    //   duration: 0,
    // })
    .add({
      targets: [container, gridContainer.children],
      opacity: [0.7],
      translateY: '0%',
      duration: 800,
      easing: 'easeInCirc',
      elasticity: function(target, index, totalTargets) {
        // Elasticity multiplied by every div index, in descending order
        return 200 + ((totalTargets - index) * 200);
      },
      delay: function(target, index) {
        return index * 300
      },
    })
    // .add({
    //   targets: gridContainer.children,
    //   // translateY: '0%',
    //   duration: 800,
    //   easing: 'easeInQuart',
    //   complete: () => console.log('complete')
    // })
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
    backgroundColor: '#211a1d',
    position: 'absolute',
    top: 0, 
    left: 0,
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: "repeat(auto-fill, minmax(250px,1fr))",
    overflowY: 'scroll',
  },
  photoView_GridContainer: {
    height: '100%',
    width: '100%',
    // display: 'grid',
    // gridTemplateColumns: 'repeat(auto, 10)',
    // gridTemplateRows: 'repeat(auto, 10)',
    border: '1px solid pink',
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
    width: '50vw',
    border: '1px dotted red',
  }
})
