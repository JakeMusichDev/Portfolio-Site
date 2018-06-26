import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'


export default class WorkProjectContainer extends Component {
  componentDidMount () {
    
  }
  

  render() {
    return (
      <div className={css(styles.workProjectContainer)}>
        AIRSWAP
      </div>
    )
  }
}

const styles = StyleSheet.create({
  workProjectContainer: {
    height: '100%',
    width: '100%',
    gridRow: '2/7',
    gridColumn: '2/5',
    border: '1px solid white',
    color: 'white',
    fontFamily: 'Inconsolata'
  },
})
