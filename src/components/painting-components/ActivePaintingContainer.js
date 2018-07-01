import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import Painting from './Painting'

export default class ActivePaintingContainer extends Component {
  componentDidMount() {

  }

  render() {
    const { activeIndex, paintingData } = this.props
    const list = paintingData.map((item, index) => <Painting key={`${item.key} + '-' + ${index}`} item={item} />)
    return (
      <div id="paintingView--mainContainer" className={css(styles.paintingViewContainer)}>
        {paintingData.map((item, index) =>
          activeIndex === index && (
            <Painting key={item.key} item={item} />
          )
        )}
      </div>
    )
  }


}

// {/* {paintingData.map((item, index) => <Painting key={`${item.key} + '-' + ${index}`} item={item} />
//     // activeIndex === index && (
//     //   <Painting key={item.key} item={item} />
//     // )
// )} */}

const styles = StyleSheet.create({
  paintingViewContainer: {
    height: '100vh',
    width: '100vw',
    gridRow: '2/5',
    gridColumn: '2/4',
    border:'1px solid red',
    color: 'white',
    // display: 'flex'
  }
})
