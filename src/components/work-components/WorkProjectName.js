import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import Zoom from 'react-reveal/Reveal'

export default class WorkProjectDescription extends Component {
  componentDidMount () {
    Anime({
      targets: '#project-name',
      opacity: [0,1],
      duration: 1000,
      easing:'linear',
      delay: 200
    })
  }
  

  render() {
    const { svg, onOpen } = this.props
    return (
      <div id={`project-name`} className={css(styles.projectName)}>
        <img onClick={onOpen} className={css(styles.nameSvg)} src={`${svg}`} />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  projectName: {
    width: '100%',
    height: '100%',
    gridRow: '6/7',
    gridColumn: '2/4',
    zIndex: 4,
    ":hover": {
      cursor: 'pointer'
    }
  },
  nameSvg: {
    height: '100%',
    width: 'auto',
    gridRow: '2/7',
    gridColumn: '2/6',
  }
})
