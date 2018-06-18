import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../utils/styles'
import '../../styles/index.css'
import VanillaTilt from 'vanilla-tilt'

export default class HomeMenuSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tiltArray:[]
    }
  }
  componentDidMount() {
    this.attachTilt()
    this.animateIn()
  }

  componentWillUnmount() {
    const { index, direction } = this.props
    const tl = Anime.timeline()
    Anime({
      targets: `#menu-section-${index}`,
      translateY: '100px',
      opacity:[0,1],
      duration: 2000,
      easing: 'easeInOutQuint',
    })
  }

  render() {
    const { item, index, active, onSectionClick } = this.props
    const sectionStyle =
      active === index
        ? css([styles.sectionContainer, styles.active])
        : css(styles.sectionContainer)
    return (
      <div name='menu--section' className={css(styles.sectionWrapper)} >
        <div id={`menu-section-${index}`} className={sectionStyle}>
          <div
            onClick={e => onSectionClick(e, item)}
            className={css(styles.section)}>
            { item.name.toUpperCase() }
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
        translateY: `${direction}150%`,
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
    if( this.checkSize() ) {
      const tiltArray = [];
      const elements = document.getElementsByName('menu--section')
      console.log(elements);
      
      for (var i = 0; i < elements.length; i++) {
        var elementToDestroy = elements[i];
        tiltArray.push(elementToDestroy)
        VanillaTilt.init(elements[i], {
          reverse: false,
          max: 50,
          perspective: 1000,
          scale: 1,
          speed: 700,
          transition: true,
          axis: null,
          reset: true,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        });
      }
      this.setState({tiltArray})
    }
  }

  destroyTilt = () => {
    const {tiltArray} = this.state;
    if ( this.checkSize() && !this.isSafari() ) {
      for (var i = 0; i < tiltArray.length; i++) {
        if(tiltArray[i].vanillaTilt) {
          tiltArray[i].vanillaTilt.destroy();
        }
      }
    }
  }

  checkSize = () => {
    return window.innerWidth > 600;
  };
  
}

const styles = StyleSheet.create({
  sectionWrapper: {
    height: '100%',
    width: '100%',
  },
  sectionContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'none',
  },
  section: {
    textDecoration: 'none',
    color: '#F2F2F2',
    webkitTextStrokeWidth: '1px',
    webkitTextStrokeColor: 'white',
    fontSize: '7em',
    fontFamily: ['Vollkorn', 'sans-serif'],
    letterSpacing: "10px",
    opacity:'0.8',
    transition: '0.4s opacity',
    height: 'auto',
    border: '1px solid green',
    width: 'auto',
    ":hover" : {
      opacity:0.9
    }
  },
  active: {
    display: 'flex',
  },
})
