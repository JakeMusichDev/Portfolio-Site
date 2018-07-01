import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Photo from '../art-components/Photo'
import '../../styles/index.css'
import Anime from 'animejs'
import Fade from 'react-reveal/Fade';

export default class PhotoModal extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.animateIn()
  }

  render() {
    const { gridData } = this.props
    
    return (
      <div id='photoview-focus-grid' className={css(styles.photoView_GridContainer)} >
        <Fade>
          {gridData.map((content, index) => (
            <div key={`${content.name} + ${index}`} className='row'>
              <div className="col-sm-offset-2" >
                <img
                  // style={content.gridPosition}
                  className={css(styles.img)}
                  src={`${content.src}`}
                  alt="photo"
                />
              </div>
            </div>
          ))}
        </Fade>
      </div>
    )
  }

  animateIn = () => {
    const gridContainer = document.getElementById("photoview-focus-grid")
    const tl = Anime.timeline()
    tl
    .add({ 
      targets: gridContainer.children,
      opacity: 0,
      scale: 0.9,
      duration: 0,
    })
    .add({
      targets: [gridContainer.children],
      opacity: [1],
      duration: 800,
      scale: 1,
      easing: 'easeInExpo',
      // delay: 2000,
      offset: '+=200',
      elasticity: function(target, index, totalTargets) {
        return 200 + ((totalTargets - index) * 200);
      },
      delay: function(target, index) {
        return index * 100
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
}

const styles = StyleSheet.create({
  photoView_GridContainer: {
    height: 'auto',
    marginLeft: '15%',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // border: '1px solid white',
    // padding: 5
  },
  img: {
    marginBottom: 50,
    height: 'auto',
    width: '100%',
    
  }
})
