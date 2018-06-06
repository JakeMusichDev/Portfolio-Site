import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import _ from 'underscore'

import HomeMenu from '../components/home-components/HomeMenu'
import HomeMenuSlider from '../components/home-components/HomeMenuSlider'
import ScrollInstruction from '../components/home-components/ScrollInstruction'
import PixiDisplacementImage from '../components/general-components/PixiDisplacementImage'
import SectionCounter from '../components/home-components/SectionCounter'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { currentItem: 0, direction: null }

    this.handleScroll = _.throttle(this.scrollMonitor, 1500, {
      trailing: false,
    })
  }

  componentDidMount() {
    this.wheelEvent = window.addEventListener('wheel', this.handleScroll)
  }
 
  componentWillUnmount() {
    console.log(this.wheelEvent);
    window.removeEventListener('wheel', this.wheelEvent)
  }


  render() {
    const { currentItem, direction } = this.state

    return (
      <div id="home" className={css(styles.homeContainer)}>
        <PixiDisplacementImage currentItem={currentItem}  />
        <HomeMenuSlider currentItem={currentItem} direction={direction} />
        <HomeMenu
          onSectionClick={this.onSectionClick}
          currentItem={currentItem}
          direction={direction}
        />
        <ScrollInstruction />
        <SectionCounter currentItem={currentItem} />
      </div>
    )
  }

  onSectionClick = (event, section) => {
    const _this = this
    const tl = Anime.timeline()

    tl.add({
      targets: '#home',
      opacity: 0,
      elasticity: 0,
      easing: 'easeOutQuart',
      duration: 1000,
      complete: () => {
        _this.props.history.push(`${section.route}`)
      },
    })
  }

  scrollMonitor = wheelEvent => {
    const direction = wheelEvent.deltaY > 0 ? '+' : '-'
    const { currentItem } = this.state
    let nextItem

    if (direction === '+' && currentItem === 2) {
      nextItem = 0
    } else if (direction === '+' && currentItem >= 0) {
      nextItem = currentItem + 1
    } else if (direction === '-' && currentItem !== 0) {
      nextItem = currentItem - 1
    } else if (direction === '-' && currentItem === 0) {
      nextItem = 2
    } else {
      return
    }

    this.setState({ currentItem: nextItem, direction })
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    height: 'calc(100vh - 5vh)',
    width: '100vw',
    border: '1px solid red',
    display: 'block',
    background: 'none',
  },
  homeMenu: {
    height: '60vh',
    width: '1px',
    position: 'absolute',
    top: '20vh',
    right: '5vw',
    // marginLeft:'100',
    border: '0.25px solid white',
  },
})
