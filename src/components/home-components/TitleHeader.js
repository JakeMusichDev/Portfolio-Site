import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

export default class TitleHeader extends Component {
  componentDidMount() {
    Anime({
      targets:this.header,
      // translateY:'100px',
      duration:2000,
      delay:1000
    })
  }

  render() {
    return (
      <div ref={el => {this.header = el}} className={css(styles.titleHeader)}>
        {" JAKE MUSICH "}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  titleHeader: {
    border:"1px solid blue"
  },
})
