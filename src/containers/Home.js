import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import HomeMenu from '../components/home-components/HomeMenu'
import PropTypes from 'prop-types'

export default class Home extends Component {
  render () {
    return (
      <div className={css(styles.homeContainer)}>
        <HomeMenu />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    position:"absolute",
    top:0,
    left:0,
    height:'100vh',
    width:"100vw"
  }
})
