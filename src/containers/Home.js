import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import Scroller from '../components/home-components/Scroller'
import TitleHeader from '../components/general-components/TitleHeader'

import backgroundImg from '../../assets/home/home_bk.jpeg'
import * as PIXI from 'pixi.js'

export default class Home extends Component {
  app: PIXI.Application;
  canvasAnchor: HTMLDivElement;

  componentDidMount() {
    this.initPixi()
  }
  render() {
    let component = this;
    return (
      <div id='home' className={css(styles.homeContainer)}>
        <div ref={(thisDiv) => {component.canvasAnchor = thisDiv}} />
        <Scroller />
      </div>
    )
  }

  initPixi = () => {
    //Aliases
    const home = document.getElementById('home')

    let Application = PIXI.Application,
        loader = PIXI.loader,
        resources = PIXI.loader.resources,
        Sprite = PIXI.Sprite;

    //Create a Pixi Application
    let app = new Application({
        width: window.innerWidth,
        height: window.innerHeight,
        antialias: true,
        transparent: false,
        resolution: 1
      }
    );

    //Add the canvas that Pixi automatically created for you to the HTML document
    this.canvasAnchor.appendChild(app.view);

    //load an image and run the `setup` function when it's done
    loader
      .add(`${backgroundImg}`)
      .on("progress", loadProgressHandler)
      .load(setup);

      function loadProgressHandler() {
        console.log("loading");
      }

    //This `setup` function will run when the image has loaded
    function setup() {

      //Create the cat sprite
      const back = new Sprite(resources[`${backgroundImg}`].texture);
      back.height = window.innerHeight
      back.width = window.innerWidth


      // const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
      back.filters = [new PIXI.filters.BlurFilter()];

      // app.stage.filters = [displacementFilter];
      // app.stage.addChild(displacementFilter);
      // app.stage.addChild(image);
      app.stage.addChild(back);
    }

  }
}

const styles = StyleSheet.create({
  homeContainer: {
    height: '100vh',
    // background: `url(${backgroundImg}) no-repeat center center`,
    backgroundSize: 'cover',
  },
  cont: {
    height: '200vh',
  },
})
