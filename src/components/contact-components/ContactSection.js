import React, {
  Component, PropTypes
} from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

import Socials from './Socials'
import ContactBio from './ContactBio'
import SkillSection from './SkillSection'

export default class ContactSection extends Component {
  componentDidMount() {
    const tl = Anime.timeline()
    tl.add({
      targets: ['#contact-section'],
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 0,
      delay: function(el, i) { return i * 250 },
    }).add({
      targets: ['#contact-section'],
      translateY: ['0%'],
      opacity: 0.7,
      duration: 1000,
      easing: 'easeInQuart',
    })
  }

  render() {
    return (
      <div
        id='contact-section'
        className={css(styles.contactContainer)}
      >
        <ContactBio />
        <SkillSection />
        <Socials />
      </div>
    )
  }
  
}

const styles = StyleSheet.create({
  contactContainer: {
    height: '200%',
    width: '100%',
    gridRowStart: '2',
    gridColumn: '1/5',
    background: 'rgb(15,15,15)',
    // border: '1px solid blue',
    display: 'block',
  },
})
