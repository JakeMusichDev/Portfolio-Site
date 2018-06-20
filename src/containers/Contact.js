import React, {
  Component, PropTypes
} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import Name from '../components/contact-components/Name'
import Socials from '../components/contact-components/Socials'
import ContactBio from '../components/contact-components/ContactBio'
import ContactSection from '../components/contact-components/ContactSection'
import Rellax from 'rellax'
import nameSvg from '../../assets/name_lg.svg'
import {contactCopy} from '../utils/copy.js'

export default class Contact extends Component {
  componentDidMount() {
    this.attachRellax()
    // const tl = Anime.timeline({loop:false})
    // tl.add({
    //   targets: ['#c--img'],
    //   // strokeDashoffset: [Anime.setDashoffset, 0],
    //   // translateY: ['100%'],
    //   opacity: 0,
    //   easing: 'easeInOutSine',
    //   duration: 0,
    //   delay: function(el, i) { return i * 250 },
    // }).add({
    //   targets: ['#c--img'],
    //   translateY: ['0%'],
    //   opacity: 0.7,
    //   duration: 1000,
    //   easing: 'easeInQuart',
    // })
  }

  render() {
    return (
      <div id="contact--mainContainer" className={css(styles.contactContainer)}>
        <div ref={ el => this.leftSection = el } className={css(styles.leftSide)}>
          <Name />
        </div>
        <div ref={ el => this.rightSection = el } className={css(styles.rightSide)}>
          <ContactSection />
        </div>
      </div>
    )
  } 

  attachRellax = () => {
    const rellaxLeft = new Rellax(this.leftSection, {
      wrapper: '#contact--mainContainer',
      speed: 3.5,
    })

    const rellaxRight = new Rellax(this.rightSection, {
      wrapper: '#contact--mainContainer',
      speed: -8.5,
    })
  }
}

const styles = StyleSheet.create({
  contactContainer: {
    height: '100vh',
    width: '100vw',
    background: 'rgb(15,15,15)',
    display: 'block',
    overflowY: 'scroll'
  },
  leftSide: {
    height: '100%',
    width: '35%',
    background: 'rgb(15,15,15)',
    float: 'left',
  },
  rightSide: {
    height: '100%',
    width: '65%',
    float: 'right',
    // display: 'block',
    // border:"1px solid pink",
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(5, 20%)',
  }
})
