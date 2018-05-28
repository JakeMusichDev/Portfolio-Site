import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../../utils/styles'
import '../../../styles/index.css'

export default class HomeMenuSection extends Component {
  componentDidMount() {
    this.animateIn()
  }

  render() {
    const { item, index, active, onSectionClick } = this.props
    const sectionStyle =
      active === index
        ? css([styles.sectionContainer, styles.active])
        : css(styles.sectionContainer)
    return (
      <div className={css(styles.sectionWrapper)} >
        <div id={`menu-section-${index}`} className={sectionStyle}>
          <div
            onClick={e => onSectionClick(e, item)}
            className={css(styles.section)}>
            {item.name.toUpperCase()}
          </div>
        </div>
      </div>
    )
  }

  animateIn = () => {
    const { index, direction } = this.props
    const tl = Anime.timeline()
    tl
      .add({
        targets: `#menu-section-${index}`,
        translateY: `${direction}100%`,
        duration: 0,
      })
      .add({
        targets: `#menu-section-${index}`,
        translateY: '0%',
        opacity:[0,1],
        duration: 500,
        easing: 'easeInOutQuint',
        elasticity: 100,
      })
  }

  attachTilt = () => {

  }
  
}

const styles = StyleSheet.create({
  sectionWrapper: {
    // overflow:'hidden',
    height: '100%',
    width: '100%',
  },
  sectionContainer: {
    height: '100%',
    width: '100%',
    // border: '1px solid red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    display: 'none',
  },
  section: {
    textDecoration: 'none',
    color: 'white',
    opacity: '0.5',
    fontSize: '5em',
    fontFamily: ['Raleway', 'sans-serif'],
    // letterSpacing: "6px",
    transition:'0.2s all',
    fontWeight:500,
    ":hover" : {
      opacity:0.9
    }
  },
  active: {
    display: 'flex',
  },
})
// <svg className={css(styles.svg)} viewBox="0 0 350 50">
//   <text className={css(styles.text)} y="40">JAKE MUSICH</text>
// </svg>
  // initTilt = () => {
  //   if( this.checkSize() && !this.isSafari() ) {
  //     const tiltArray = [];
  //     const elements = document.getElementsByName('member-headshot')
  //     for (var i = 0; i < elements.length; i++) {
  //       var elementToDestroy = elements[i];
  //       tiltArray.push(elementToDestroy)
  //       VanillaTilt.init(elements[i], {
  //         reverse: false,
  //         max: 30,
  //         perspective: 1000,
  //         scale: 1,
  //         speed: 700,
  //         transition: true,
  //         axis: null,
  //         reset: true,
  //         easing: "cubic-bezier(.03,.98,.52,.99)",
  //       });
  //     }
  //     this.setState({tiltArray})
  //   }
  // };

  // destroyTilt = () => {
  //   const {tiltArray} = this.state;
  //   if ( this.checkSize() && !this.isSafari() ) {
  //     for (var i = 0; i < tiltArray.length; i++) {
  //       if(tiltArray[i].vanillaTilt) {
  //         tiltArray[i].vanillaTilt.destroy();
  //       }
  //     }
  //   }
  // }

  // checkSize = () => {
  //   return window.innerWidth > 800;
  // };