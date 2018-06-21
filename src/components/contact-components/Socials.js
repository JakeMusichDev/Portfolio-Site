import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../styles/index.css'
import {socialsIconsData} from '../../data/socials-icons.js'

export default class Socials extends Component {

  render() {
    return (
      <div className={css(styles.socialContainer)}>

        <h3 className={css(styles.socialTagline)}>
          Connections are cool. <br/>
          Find me at the links below.
        </h3>
        <div className={css(styles.socialIconsWrapper)}>
          {socialsIconsData.map( (item, index) =>
            <div key={index} className={css(styles.itemWrapper)}>
              <a href={item.url} > 
                <img src={`${item.icon}`} className={css(styles.itemImg)} />
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }


}

const styles = StyleSheet.create({
  socialContainer: {
    gridRow: '5/6',
    gridColumn: '4/5',
    color:"white",
    fontFamily: ['Inconsolata', 'serif'],
    height:"auto",
    fontSize:12,
    display: 'block',
    // border:'1px solid green',
    
  },
  socialTagline: {
    height: '100%',
    width: '100%',
    fontSize:14,
  },
  socialIconsWrapper: {
    height: '100%',
    width: '100%',
    display:'flex',
    flexDirection: 'row'
  },
  itemWrapper: {
    height: '100%',
    width: '100%',
  },
  itemImg: {
    margin:'10px',
    height:'30px',
    width: '30px',
    margin: 'auto 0'
  }
})
