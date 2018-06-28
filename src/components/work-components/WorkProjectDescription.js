import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

export default class WorkProjectDescription extends Component {
  componentDidMount () {
    Anime({
      targets: '#project-description',
      opacity: [0,1],
      duration: 1000,
      easing:'linear',
      delay: 300
    })
  }
  

  render() {
    const { description } = this.props
    return (
      <div id="project-description" className={css(styles.descriptionContainer)}>
        {description}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  descriptionContainer: {
    height: '100%',
    width: '100%',
    gridRow: '6/8',
    gridColumn: '5/7',
    // border: '1px solid green',
    fontSize: 11,
    textAlign : 'right',
    color: 'white',
    fontFamily: 'Inconsolata'
  },
})
