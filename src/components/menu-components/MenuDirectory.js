import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { Link } from 'react-router-dom'
import Anime from 'animejs'
import {items} from '../../data/home-route-data.js'

export default class MenuDirectory extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: this.container.children,
      height: '0%',
      duration: 0,
      translateY: '200%'
    }).add({
      targets: this.container.children,
      translateY: '0%',
      opacity: [0, 1],
      easing: 'easeInSine',
      duration: 1000,
      delay: function(target, index) {
        return index * 200;
      },
    })
  }

  render() {
    const { handleOpenPainting, paintingData } = this.props
    return (
      <div id="paintingView--mainContainer" ref={el => (this.container = el)} className={css(styles.paintingListContainer)}>
        {items.map(
          (item, index) => (
            <Link to={`${item.route}`} className={css(styles.menuListItem)}>
              {item.name.toUpperCase()}
            </Link>
          )
        )}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  paintingListContainer: {
    height: 'auto',
    width: '100%',
    gridRow: '2/4',
    gridColumn: '2/3',
    color: 'black',
    cursor: 'pointer',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // flexWrap: 'wrap',
    // flexBasis: 'fit-content'
  },
  menuListItem: {
    height: 'auto',
    // width: '100%',
    // border:'1px solid white',
    textAlign:'left',
    fontFamily: 'Inconsolata',
    fontSize:12,
    fontWeight:200,
    textDecoration:"none",
    outline:"none",
    padding: '5%',
    opacity: '0.4',
    color: 'white',
    // transition: '0.5s all',
    ":hover": {
      opacity: '1',
      // scale: 1.1
    }
  }
})
