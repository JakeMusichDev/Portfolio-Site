import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import Scroller from '../components/home-components/Scroller'
import TitleHeader from '../components/general-components/TitleHeader'

import backgroundImg from '../../assets/home/home_bk.jpeg'
import * as PIXI from 'pixi.js'

export default class Home extends Component {
  app: PIXI.Application;
  gameCanvas: HTMLDivElement;

  componentDidMount() {
    this.initPixi()
  }
  render() {
    let component = this;
    return (
      <div id='home' className={css(styles.homeContainer)}>
        <div ref={(thisDiv) => {component.gameCanvas = thisDiv}} />
        <Scroller />
      </div>
    )
  }

  initPixi = () => {
          // Create a new application
      this.app = new PIXI.Application(window.innerWidth, window.innerHeight);

      this.gameCanvas.appendChild(this.app.view);
      // this.app.start();
      // Draw a green rectangle
      const rect = new PIXI.Graphics()
          .beginFill(0x00ff00)
          .drawRect(40, 40, 200, 200);

      // Add a blur filter
      rect.filters = [new PIXI.filters.BlurFilter()];

      // Display rectangle
      const home = document.getElementById('home')
      // app.stage.addChild(rect);
      // home.appendChild(app.view);
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    height: '100vh',
    background: `url(${backgroundImg}) no-repeat center center`,
    backgroundSize: 'cover',
  },
  cont: {
    height: '200vh',
  },
})
