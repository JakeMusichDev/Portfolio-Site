import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import nameSvg from '../../../assets/name_lg.svg'
import Anime from 'animejs'

export default class Name extends Component {
  componentDidMount() {
        
    const tl = Anime.timeline()
    tl.add({
      targets: ['#c--img'],
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 0,
      delay: function(el, i) { return i * 250 },
    }).add({
      targets: ['#c--img'],
      translateY: ['0%'],
      opacity: 0.3,
      duration: 1000,
      easing: 'easeInQuart',
    })
  }
  render() {
    return (
      <div className={css(styles.flickerImgContainer)}>
        <img id='c--img' className={css(styles.img)} src={`${nameSvg}`} alt=""/>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  flickerImgContainer: {
    height: '200%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
    // border: '1px solid white'
  },
  img: {
    height:"1000px",
    width:"auto",
    opacity: '0.5'
  }
})
