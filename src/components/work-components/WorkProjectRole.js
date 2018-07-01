import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import '../../styles/index.css'

export default class WorkProjectRole extends Component {
  componentDidMount () {
    const tl = Anime.timeline()
    tl.add({
      targets: '#project-role',
      translateX: '-100%',
      duration: 0,
    }).add({
      targets: '#project-role',
      opacity: [0, 1],
      translateX: '0%',
      duration: 1000,
      easing:'easeInExpo',
      // delay: 200
    })
  }
  

  render() {
    const { role } = this.props
    return (
      <div id="project-role" className={css(styles.projectName)}>
        <div className={ css(styles.name)} >
          [ {role} ]
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  projectName: {
    width: '100%',
    height: '100%',
    gridRow: '3/4',
    gridColumn: '2/4',
    zIndex: 4,
    fontFamily: 'Inconsolata',
    fontSize: 10,
  },
  name: {
    transition: '0.4s all',
    ":hover": {
      transform: 'translateX(5%)'
    }
  }
})
