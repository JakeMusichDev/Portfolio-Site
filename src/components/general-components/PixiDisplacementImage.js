import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import backgroundImg from '../../../assets/home/home_bk.jpeg'
import displacementFilterImg from '../../../assets/home/displacementFilterHome.jpeg'
import * as PIXI from 'pixi.js'

export default class Home extends Component {
  app: PIXI.Application;
  canvasAnchor: HTMLDivElement;
  displacementFilter: PIXI.filter;
  count:Number;

  constructor(props) {
    super(props);

    this._animateCanvas = this.animateCanvas.bind(this)
  }


  componentDidMount() {
    this.count = 0
    this.initPixi()
  }
  render() {
    let component = this;
    return (
      <div onClick={this._animateCanvas} className={css(styles.homeContainer)}>
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
      .load(this.textureConfig);
  };

  textureConfig = () => {
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
    this.displacementFilter.scale.x = this.count*10;
	  this.displacementFilter.scale.y = this.count*10;

    if (this.count === 0 || this.count < 10 ) {
      this.count += 0.05
    } else if(this.count >= 10 ){
      this.count -= 0.05;
    } else {
      console.log('anim eror');
    }

    console.log(this.count)
  }

}

const styles = StyleSheet.create({
  homeContainer: {
    height: '100vh',
  },
})
