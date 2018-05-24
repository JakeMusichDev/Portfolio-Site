import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import * as PIXI from 'pixi.js'

import backgroundImg from '../../../assets/home/home_bk.jpeg'
import displacementFilterImg from '../../../assets/home/displacementFilterHome.jpeg'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.app = PIXI.Application;
    this.canvasAnchor = HTMLDivElement;
    this.displacementFilter = PIXI.filter;
    this.count = Number;
    this._animateCanvas = this.animateCanvas.bind(this)
  }


  componentDidMount() {
    this.count = 0
    this.initPixi()
  }
  render() {
    let component = this;
    return (
      <div 
        onMouseMove={this._animateCanvas} 
        onMouseLeave={this.rewindAnimation}
        className={css(styles.homeContainer)}
      >
        <div ref={(thisDiv) => {component.canvasAnchor = thisDiv}} />
      </div>
    )
  }

  initPixi = () => {
    if(!PIXI.loader.resources.background) {
      this.loaderConfig()
    }

    this.buildApp()
  }

  buildApp = () => {
    this.app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        antialias: true,
        transparent: false,
        resolution: 1,
        autoResize:true,
        // forceCanvas:true,
        interactive:true
      }
    );
    this.app.renderer.resize(window.innerWidth, window.innerHeight)
    this.canvasAnchor.appendChild(this.app.view);
  };

  loaderConfig = () => {
    PIXI.loader
      .add("background", `${backgroundImg}`)
      .add("filter", `${displacementFilterImg}`)
      .load(this.attachFilteredImage);
  };


  attachFilteredImage = () => {
    //Create the main image sprite
    const background = new PIXI.Sprite(PIXI.loader.resources['background'].texture);
    background.height = window.innerHeight
    background.width = window.innerWidth

    const displacementSprite = new PIXI.Sprite(PIXI.loader.resources['filter'].texture);
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    displacementSprite.anchor.set(0)

    this.displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    this.displacementFilter.scale.x = 0;
    this.displacementFilter.scale.y = 0;

    background.filters = [this.displacementFilter]
    this.app.stage.addChild(background);
  }


  animateCanvas = () => {
    const loop = window.requestAnimationFrame(this.animateCanvas.bind(this))
    this.displacementFilter.scale.x = this.count * 10;
	  this.displacementFilter.scale.y = this.count * 10;
    
    this.count += 0.01
    if(this.count >= 10) {
      window.cancelAnimationFrame(loop);
    }
  }

  rewindAnimation = () => {
    const loop = window.requestAnimationFrame(this.rewindAnimation.bind(this))
    this.displacementFilter.scale.x = this.count * 10;
	  this.displacementFilter.scale.y = this.count * 10;
    
    this.count -= 0.01

    if(this.count === 0) {
      window.cancelAnimationFrame(loop);
    }
  }

}

const styles = StyleSheet.create({
  homeContainer: {
    height: '100vh'
  },
})
