import React, {
  Component, PropTypes
} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

import Socials from './Socials'
import ContactBio from './ContactBio'
export default class ContactSection extends Component {
  componentDidMount() {
    
    const tl = Anime.timeline({loop:false})
    tl.add({
      targets: ['#c--img'],
      // strokeDashoffset: [Anime.setDashoffset, 0],
      // translateY: ['100%'],
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 0,
      delay: function(el, i) { return i * 250 },
    }).add({
      targets: ['#c--img'],
      translateY: ['0%'],
      opacity: 0.7,
      duration: 1000,
      easing: 'easeInQuart',
    })
  }

  render() {
    return (
      <div className={css(styles.contactContainer)}>
        <ContactBio />
        <Socials />      
      </div>
    )
  } 
}

const styles = StyleSheet.create({
  contactContainer: {
    height: '200%',
    width: '100%',
    background: 'rgb(15,15,15)',
    display: 'block',
  },
})
