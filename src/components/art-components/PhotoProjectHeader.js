import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import '../../styles/index.css'


class PhotoProjectHeader extends Component {
  render () {
    const {title} = this.props
    const titleSplitAr = title.split("")

    return (
      {
        titleSplitAr.map()
      }
      <div className={css(styles.headerWrapper)}>
        <div className={css(styles.headerText)}>

        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  
});

export default PhotoProjectHeader