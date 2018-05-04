import React, {Component} from 'react'
import Anime from 'animejs';
import { StyleSheet, css } from 'aphrodite/no-important';
import HomeMenuSlider from '../home-components/HomeMenuSlider'

export default class HomeMenu extends Component {
  componentDidMount() {
    const tl = Anime.timeline()
    tl.add({
      targets: ["#"],
    })
  }
  render () {
    return (
      <div className={css(styles.homeMenuContainer)}>
        <HomeMenuSlider />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  homeMenuContainer: {
    position:"absolute",
    top:"10vh",
    left:'55vw',
    height:'80vh',
    width:"30vw",
    border:"1px solid blue"
  }
})
