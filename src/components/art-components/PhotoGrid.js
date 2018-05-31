import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

// import Socials from '../components/contact-components/Socials'

// import backgroundImg from '../../assets/home/home_bk.jpeg'

export default class Art extends Component {
  render() {
    return (
      <div className={css(styles.artContainer)}>
        {socials.map((item, index) => (
          <div key={index} className={css(styles.item)}>
            {item}
          </div>
        )}
      </div>
    )
  }
}

const gridRow = props => {
  return <div />
}

const styles = StyleSheet.create({
  artContainer: {
    height: '100%',
    border: '1px solid blue',
  },
  artGridWrapper: {},
})
 