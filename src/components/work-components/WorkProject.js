import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import _ from 'underscore'
import Utils from '../../utils/functions.js'

export default class WorkProject extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visible:false
    }

    this.isInViewport_throttled = _.throttle(this.isInViewport, 200, {trailing: false})
  }
  
  componentWillMount () {
    window.addEventListener('wheel', this.isInViewport_throttled.bind(this), false)
  }

  componentDidMount() {

  }
  

  render() {
    const { project, index } = this.props
    return (
      <div id={`work--project-${index}`} ref={ el => this.projectElement = el } className={css(styles.workProject)}>
        <div className={css(styles.projectName)}>
          <img className={css(styles.nameSvg)} src={`${project.images.nameSvg}`} />
        </div>
        <div className={css(styles.projectDescription)}>
          {/* {project.description} */}
        </div>
        <div className={css(styles.projectImage)}>
          <img className={css(styles.img)} src={`${project.images.desktop}`} />
        </div>
      </div>
    )
  }


  isInViewport = (e) =>  {
    const { index } = this.props
    let advisorVisible;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const el = document.getElementById(`work--project-${index}`)
    const projectBounding = document.getElementById(`work--project-${index}`).getBoundingClientRect()
    const projectHeight = projectBounding.height
    var util = new Utils()
    let i = util.isElementInView(el, true)

    console.log('====================================');
    console.log(i);
    console.log('====================================');
      
    advisorVisible = (projectBounding.top <= windowHeight )
    
    if(advisorVisible && !this.state.visible) {
      console.log('====================================');
      console.log('visible');
      console.log('====================================');
      // this.animateIn()
    }
  }

  animateIn = () => {
    console.log('animate in')
    
    this.animationIn = Anime.timeline({autoplay: true}).add({
      targets: this.projectElement, 
      duration: 0,
      opacity: [0],
    }).add({
      targets: this.projectElement, 
      duration: 2000,
      opacity: [1],
      easing: 'linear',
      autoplay: false,
      complete: () => this.setState({visible: true})
    })
  }
}

const styles = StyleSheet.create({
  workProject: {
    height: '100vh',
    width: '100%',
    borderTop: '1px solid red',
    color: 'white',
    fontFamily: 'Inconsolata',
    display: 'grid',
    overflow: 'hidden',
    gridTemplateColumns: 'repeat(6, 15%)',
    gridTemplateRows: 'repeat(6, 15%)',
    
  },
  projectName: {
    width: '100%',
    height: '100%',
    gridRow: '3/4',
    gridColumn: '2/4',
    border: '1px solid red',
    zIndex: 4
  },
  nameSvg: {
    border: '1px solid red',
    height: 100,
    width: 'auto',
    width: '100%',
    gridRow: '2/7',
    gridColumn: '2/6',
  },
  projectImage: {
    width: 'auto',
    border: '1px solid pink',
    width: '100%',
    gridRow: '4/7',
    gridColumn: '3/7',
    zIndex: 2
  },
  img: {
    height: 300,
    width: 'auto'
  }
})
