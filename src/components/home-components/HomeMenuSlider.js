import React, {Component} from 'react'
import Anime from 'animejs';
import { StyleSheet, css } from 'aphrodite/no-important';

export default class HomeMenu extends Component {
  componentDidMount() {
    const tl = Anime.timeline()
    tl.add({
      targets: ["#"],
    })
  }
  render () {
    return (
      <div className={css(styles.homeMenuSliderContainer)}>
        <div>
            
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  homeMenuSliderContainer: {
    height:'10%',
    width:"100%",
    border:"1px solid red",
  }
})
