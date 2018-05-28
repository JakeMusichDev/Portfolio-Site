import React, { Component } from 'react'
import Anime from 'animejs'
import { StyleSheet, css } from 'aphrodite/no-important'
import { breakPoints } from '../../../utils/styles'
import '../../../styles/index.css'


export default class SectionCounter extends Component {
    render () {
        return (
            <div>
                
            </div>
        )
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
      fontSize: '8em',
      fontFamily: ['Vesper Libre', 'sans-serif'],
      letterSpacing: "2px"
    },
    active: {
      display: 'flex',
    },
  })