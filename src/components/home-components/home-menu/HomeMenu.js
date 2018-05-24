import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../../utils/styles'

import HomeMenuSlider from './HomeMenuSlider'
import HomeMenuSection from './HomeMenuSection'

const items = [{name:"a   rt", route:"/art"}, {name:"c     n ct", route:'/contact'}, {name:'d   vlp   m nt', route:"/development"}];

export default class HomeMenu extends Component {
  componentDidMount() {
    // this.introAnimation()
  }

  componentWillReceiveProps(nextProps, prevState) {
    this.animateSection(nextProps)
  }

  animateSection = (nextProps) => {
    let currentSection = document.getElementById(`menu-section-${nextProps.currentItem}`)
    let bounding = currentSection.getBoundingClientRect()
    let top = bounding.top + bounding.height
    console.log(top);
    Anime({
      targets: this.container,
      scrollTop:top,
      duration:100
    })
  }

  render() {
    return (
      <div className={css(styles.homeMenuContainer)}>
        <div ref={el => {this.container = el}}className={css(styles.menuTagContainer)}>
          {
            items.map( (item, index) =>
              <HomeMenuSection key={index} item={item} index={index} />
            )
          }
        </div>
      </div>
    )
  }
}
{/*  <HomeMenuSlider /> */}

const styles = StyleSheet.create({
  homeMenuContainer: {
    position: 'absolute',
    height: '80vh',
    width: '30vw',
    top: '10vh',
    left: '55vw',
    color: 'white',
    [breakPoints.tablet]: {
      left: '10vw',
      height: '80vh',
      width: '80vw',
    },
  },
  menuTagContainer: {
    height: '90%',
    fontFamily:"sans-serif",
    letterSpacing:"3px",
    overflowY:'hidden',
    border:'1px solid pink'
  },
})
