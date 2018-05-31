import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

// import Socials from '../components/contact-components/Socials'

// import backgroundImg from '../../assets/home/home_bk.jpeg'
import PhotoGrid from '../components/art-components/PhotoGrid'

export default class Art extends Component {
  render() {
    return (
      <div className={css(styles.artContainer)}>
        <div className={css(styles.artGridWrapper)} >
          <PhotoGrid />
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  artContainer: {
    height: 'calc(100vh - 5vh)',
    border:'1px solid blue',
  },
  artGridWrapper: {
    height:'100%',
    width: '90%',
    marginLeft:'10%',
    overflowY: 'scroll',
    background: 'lightblue'
  }
})
