import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import Slider from "react-slick";
import Painting from './Painting'

export default class PaintingCarousel extends Component {
  constructor(props) {
    super(props);

  }

  next = () => {
    this.slider.slickNext();
  }

  previous = () => {
    this.slider.slickPrev();
  }

  render() {
    const { activeIndex, paintingData } = this.props
    const slickOptions = { initialSlide: activeIndex }

    const list = paintingData.map((item, index) => <Painting key={`${item.key} + '-' + ${index}`} item={item} />)
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...slickOptions}>
          {list}
        </Slider>
      </div>
    )
  }

// <button className="button" onClick={this.previous}>
// Previous
// </button>
// <button className="button" onClick={this.next}>
// Next
// </button>
  
}

const styles = StyleSheet.create({
  paintingViewContainer: {
    height: '100vh',
    width: '100vw',
    // gridRow: '2/5',
    // gridColumn: '2/4',
    border:'1px solid red',
    color: 'white',
    // display: 'flex'
  }
})
