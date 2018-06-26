import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import Slider from "react-slick";
import Painting from './Painting'

export default class PaintingCarousel extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log(this.slider);
    
  }

  next = () => {
    this.slider.slickNext();
  }

  previous = () => {
    this.slider.slickPrev();
  }

  render() {
    const { activeIndex, paintingData } = this.props
    const slickOptions = { initialSlide: activeIndex, centerMode: true }
    const list = paintingData.map((item, index) => <Painting key={`${item.key} + '-' + ${index}`} item={item} />)
    
    return (
      <div className={css(styles.paintingViewContainer)} >
        <Slider ref={c => (this.slider = c)} {...slickOptions}>
          { list }
        </Slider>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  paintingViewContainer: {
    // height: '100vh',
    // width: '10v',
    border: '1px solid blue',
    background: 'rgb(15, 15, 15)',
    gridRow: '2/5',
    gridColumn: '2/5',
    // display: 'flex'
  }
})
