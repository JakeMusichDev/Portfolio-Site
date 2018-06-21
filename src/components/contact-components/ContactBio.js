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
    // this.typeBio()
  }

  render() {
    return (
      <div className={css(styles.bioContainer)}>
        <h3 className={css(styles.bioHeader)}>
        Hello!
        </h3>
        <div id="contact-bio-container" className={css(styles.bioBody)}>
          {contactCopy.contactBio}
        </div>
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
  bioContainer: {
    height:"auto",
    width: '100%',
    // border: '1px solid white',
    marginBottom: '100px',
    fontFamily: ['Inconsolata', 'serif'],
  },
  bioHeader: {
    color:"white",
    fontSize:"20px",
    marginBottom: '5px'
  },
  bioBody: {
    color:"white",
    fontSize:"16px",
    lineHeight: '120%',
    alignText: 'block',
  },
})
