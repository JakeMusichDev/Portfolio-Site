import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

export default class ActivePaintingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      childViewOpen: false,
      currentprojectView: 'photo'
    }
  }


  render() {
    return (
      <div id="paintingView--mainContainer" className={css(styles.paintingMenu)}>
        
        {/* {
          this.props.people.map(function(person, index) {
            const className = this.state.activeIndex === index ? 'media active' : 'media';  
            return (
              <div className={className} key={index} onClick={handleClick.bind(this, index, this.props)}>
                
              </div>
            );
          }, this)
        } */}
      </div>
    )
  }

  
}

const styles = StyleSheet.create({
  paintingViewContainer: {
    height: '100%',
    width: '100%',
    gridRow: '',
    gridColumn: '',
    color: 'white'
  },
})
