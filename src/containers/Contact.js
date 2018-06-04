import React, {
  Component, PropTypes
} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'

import Socials from '../components/contact-components/Socials'

import backgroundImg from '../../assets/home/home_bk.jpeg'

export default class Contact extends Component {

  render() {
    console.log(backgroundImg);
    return (
      <div className={css(styles.contactContainer)}>
        <div className={css(styles.greeting)}>
          {"Connections are cool."} <br/>
          {"Find me at the links below."}
        </div>
        <div className={css(styles.socialContainer)}>
          <Socials />
        </div>
        <div className={css(styles.flickerImgContainer)}>
          <img className={css(styles.img)} src={`${backgroundImg}`} alt=""/>
        </div>
      </div>
    )
  }


}

const styles = StyleSheet.create({
  contactContainer: {
    height: '100vh',
    background: `black`,
    backgroundSize: 'cover',
    padding:"10%"
  },
  greeting: {
    height: '30vh',
    color:"white",
    fontSize:"50px",
    marginTop:'40px',
    zIndex:"2"
  },
  flickerImgContainer: {
    position:'absolute',
    height:"200px",
    width:"400px",
    top:"60vh",
    left:"50vw"
  },
  img: {
    height:"200px",
    width:"400px",
    zIndex:"1"
  }
})
