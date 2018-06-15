import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import Anime from 'animejs'
import {contactCopy} from '../../utils/copy.js'

export default class Socials extends Component {
  constructor(props) {
    super(props)
    
    this.i = 0;
  }

  componentDidMount() {
    this.typeBio()
  }

  render() {
    return (
      <div className={css(styles.socialContainer)}>
        <div id="contact-bio-container" className={css(styles.greeting)}></div>
      </div>
    )
  }

  typeBio = () => {
    var speed = 20; 
    if (this.i < contactCopy.contactBio.length) {
      document.getElementById("contact-bio-container").innerHTML += contactCopy.contactBio.charAt(this.i);
      this.i++;
      setTimeout(this.typeBio, speed);
    }
  }


  // $('.ml12').each(function(){
  //   $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  // });


}

const styles = StyleSheet.create({
  socialContainer: {
    gridRow: '3/4',
    gridColumn: '3/5',
    fontFamily:["Source Code Pro","sans-serif"],
    height:"auto",
    color:"white",
    fontSize:"10px",
    fontFamily: ['Inconsolata', 'serif'],
    // border: '1px solid white',
  },
  greeting: {
    height: '30vh',
    color:"white",
    fontSize:"11px",
    alignText: 'block',
    fontFamily: ['Inconsolata', 'serif'],
    // marginTop:'40px',
    zIndex: "2"
  },
})
