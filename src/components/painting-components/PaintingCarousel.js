import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

import Anime from 'animejs'
import Painting from './Painting'
import DirectionArrow  from './DirectionArrow'


export default class PaintingCarousel extends Component {
  componentDidMount() {
    // Anime({
    //   targets: '#carousel',
    //   duration: 1000,
    //   easing: 'linear',
    //   opacity: [0,1]
    // })
  }

  render() {
    const Container = ({children}) =>  (<div className={css(styles.container)}>{children}</div>);

    const CarouselUI = ({ position, handleClick, children }) =>(
      <Container>
        { children }
        <div onClick={handleClick} className={css(styles.arrow)} data-position={position - 1} > {"<"}</div>
        <div onClick={handleClick} className={css([styles.arrow, styles.left])} data-position={position + 1} > {">"}</div>
        {this.props.data.map((item,index) => position === index ? <div key={index} className={css(styles.titleContainer)}>{item.title}</div> : null)}
      </Container>
    );

    const Carousel = makeCarousel(CarouselUI);
    return (
      <div className={css(styles.carouselContainer)}>
        <Carousel>
          { this.props.data.map((item, index) =>    
            <Slide bottom>
              <Painting item={item} />
            </Slide>
          )}
        </Carousel>
      </div>

    )
  }

}

const styles = StyleSheet.create({
  carouselContainer: {
    border: '1px solid blue',
    position: 'relative',
    overflow: 'hidden',
    width: '90vw',
    height: '90vh'
  },
  container: {
    position: 'relative',
    overflow: 'hidden',
    width: '50%',
    height: '100%'
  },
  arrow: {
    height: 100,
    border: '1px solid blue',
    width: 100,
    zIndex: 120,
    position: 'absolute',
    top: 20,
    margin: 100
  },
  left: {
    right: 0
  },
  titleContainer: {
    height: 100,
    border: '1px solid blue',
    width: "auto",
    zIndex: 120,
    position: 'absolute',
    top: '70%',
    margin: 100
  }
})
