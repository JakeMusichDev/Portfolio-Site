import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import nameSvg from '../../../assets/name_lg.svg'

export default class Name extends Component {
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
    border: '1px solid white'
  },
  img: {
    height:"100%",
    width:"auto",
    margin: 'auto 0',
    opacity: '00.6'
  }
})
