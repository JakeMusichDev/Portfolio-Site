import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'

const socials = [
  "Github",
  'LinkedIn',
  'Medium',
  'Instagram'
]

export default class Socials extends Component {

  render() {
    return (
      <div className={css(styles.socialContainer)}>
        {socials.map( (item, index) =>
          <div key={index} className={css(styles.item)}>
            {item}
          </div>
        )}
      </div>
    )
  }


}

const styles = StyleSheet.create({
  socialContainer: {
    gridRow: '5/6',
    gridColumn: '4/5',
    color:"white",
    fontFamily:["Source Code Pro","sans-serif"],
    height:"auto",
    fontSize:10,
    // letterSpacing:"3px",
    border:'1px solid green'
  },
  item: {
    marginBottom:'3px'
  }
})
