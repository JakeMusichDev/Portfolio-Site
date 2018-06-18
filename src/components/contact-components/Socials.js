import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import {socialsIconsData} from '../../data/socials-icons.js'

export default class Socials extends Component {

  render() {
    return (
      <div className={css(styles.socialContainer)}>        
        {socialsIconsData.map( (item, index) =>
          <div key={index} className={css(styles.item)}>
            <a href={item.url} > 
              <img src={`${item.icon}`} className={css(styles.item)} />
            </a>
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
    display: 'flex',
    border:'1px solid green'
  },
  item: {
    margin:'10px',
    height:'40px',
    width: '40px'
  }
})
