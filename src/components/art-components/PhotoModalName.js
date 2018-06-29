import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Photo from '../art-components/Photo'
import '../../styles/index.css'
import Anime from 'animejs'

export default class PhotoModalName extends Component {
  componentWillMount() {
    this.animateIn()
  }

  render() {
    const { name, close } = this.props    
    return (
      <div id="project-name-container-wrapper" onClick={this.closeProjectView} className={css(styles.modalNameContainer)}>
        <div className={css(styles.modalNameWrapper)}>
          <h1 id="name" className={css(styles.modalName)}>{ name }</h1>
        </div>
      </div>
    )
  }

  animateIn = () => {
    Anime.timeline().add({
      targets: '#name',
      translateY: 150,
      duration: 0
    }).add({
      targets: '#name',
      translateY: 0,
      duration: 900,
      delay: 1000,
      easing: 'easeInOutQuint',
    })
  }

  closeProjectView = () => {
    const { project, handleCloseProject } = this.props
    handleCloseProject()
  }

}

const styles = StyleSheet.create({
  modalNameContainer: {
    position:'fixed',
    marginBottom: '10vh',
  },
  modalNameWrapper: {
    overflow: 'hidden'
  }, 
  modalName: {
    fontFamily: ['Vollhorn', 'serif'],
    color: '#F2F2F2',
		lineHeight: 1,
		marginTop: 0,
		transform: 'translateY(150px)',
  }
})
