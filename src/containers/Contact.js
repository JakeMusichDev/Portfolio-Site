import React, {
  Component, PropTypes
} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Socials from '../components/contact-components/Socials'
import ContactBio from '../components/contact-components/ContactBio'
import Anime from 'animejs'

import nameSvg from '../../assets/name_lg.svg'
import {contactCopy} from '../utils/copy.js'

export default class Contact extends Component {
  // constructor(props) {
  //   super(props)
    
  //   this.i = 0;
  // }

  componentDidMount() {
    const tl = Anime.timeline({loop:false})
    tl.add({
      targets: ['#c--img'],
      // strokeDashoffset: [Anime.setDashoffset, 0],
      translateY: ['100%'],
      easing: 'easeInOutSine',
      duration: 0,
      delay: function(el, i) { return i * 250 },
    }).add({
      targets: ['#c--img'],
      translateY: ['0%'],
      duration: 1000,
      easing: 'easeInOutSine',
    })
    
  }

  render() {
    return (
      <div className={css(styles.contactContainer)}>
        <ContactBio />
        <Socials />
        <div className={css(styles.flickerImgContainer)}>
          <img id='c--img' className={css(styles.img)} src={`${nameSvg}`} alt=""/>
        </div>
        <div className={css(styles.msgContainer)}>
          { contactCopy.welcomeMsg }
        </div>
        <div>
          {/* { contactCopy.welcomeMsg }   */}
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  contactContainer: {
    height: '100vh',
    background: 'rgb(15,15,15)',
    // padding:"10%",
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(5, 20%)',
  },
  msgContainer: {
    gridRow: '4/5',
    gridColumn: '3/4',
    height: '100%',
    color:"white",
    fontSize:"10px",
    fontFamily: ['Inconsolata', 'serif'],
    // marginTop:'40px',
    // border: '1px solid white',
    zIndex: "2"
  },
  flickerImgContainer: {
    gridRow: '1/6',
    gridColumn: '2/3',
    height: '100%',
    // border: '1px solid blue'
  },
  img: {
    height:"100%",
    width:"auto",
    zIndex:"1",
    margin: 'auto 0',
    opacity: '00.6'
  },
  
})
