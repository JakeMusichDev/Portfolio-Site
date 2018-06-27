import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

import WorkProject from './WorkProject'

export default class WorkProjectContainer extends Component {
  componentDidMount () {
    
  }
  

  render() {
    const { data } = this.props
    return (
      <div className={css(styles.workProjectContainer)}>
        {data.map( (project, index) => <WorkProject project={project} index={index} /> )}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  workProjectContainer: {
    height: '100%',
    width: '100%',
    // gridRow: '2/7',
    // gridColumn: '2/6',
    border: '1px solid red',
    color: 'white',
    fontFamily: 'Inconsolata'
  },
})
