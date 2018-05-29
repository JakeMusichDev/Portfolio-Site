import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import * as PIXI from 'pixi.js'
import Anime from 'animejs'

import backgroundImg from '../../../assets/home/film_bk.JPG'
import displacementFilterImg from '../../../assets/home/displacementFilterHome.jpeg'
import { request } from 'http';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.app = PIXI.Application
    this.canvasAnchor = HTMLDivElement
    this.filterSprite = PIXI.filter
    this.count = 0
    this._animateCanvas = this.animateCanvas.bind(this)
  }

  componentDidMount() {
    this.initPixi()
    // Anime({
    //   targets: this.canvasAnchor,
    //   opacity:[0,1],
    //   duration: 5000
    // })
  }

  render() {
    let component = this;
    return (
      <div
        className={css(styles.homeContainer)}>
        <div
          className={css(styles.home)}
          ref={thisDiv => {
            component.canvasAnchor = thisDiv
          }}
        />
      </div>
    )
  }

  initPixi = () => {
    if (!PIXI.loader.resources['background']) {
      this.loaderConfig()
    } else {
      this.buildApp()
    }
  }

  loaderConfig = () => {
    PIXI.loader
      .add('background', `${backgroundImg}`)
      .add('filter', `${displacementFilterImg}`)
      .load(this.buildApp);
  }

  buildApp = () => {
    const anchorBounds = this.canvasAnchor.getBoundingClientRect()
    // this.app = PIXI.autoDetectRenderer(256, 256);
    this.app = new PIXI.Application({
      width:  anchorBounds.width,
      height: anchorBounds.height,
      antialias: true,
      transparent: false,
      resolution: 1,
      autoResize: true,
      interactive:true
    })

    // this.app.renderer.resize(anchorBounds.height, anchorBounds.width)
    this.canvasAnchor.appendChild(this.app.view)

    this.attachFilteredImage()
  }

  attachFilteredImage = () => {
    // Create stage
    const stageContainer = new PIXI.Container()
    this.app.stage.addChild(stageContainer)
    
    // Create Image itself
    const imageSprite = new PIXI.Sprite(PIXI.loader.resources['background'].texture)
    imageSprite.autoFit = true
    imageSprite.scale.set(0.3, 0.3)
    imageSprite.anchor.set(0.2,0.2)

    // Create Filter sprite 
    // const filterSprite = new PIXI.Sprite(PIXI.loader.resources['filter'].texture)
    const filterSprite = PIXI.Sprite.fromImage(`${displacementFilterImg}`);
    // Create filter
    const displacementFilter = new PIXI.filters.DisplacementFilter(filterSprite)
    displacementFilter.autoFit = true

    filterSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    filterSprite.texture.baseTexture.wrapMode
    filterSprite.scale.x = 0.6;
    filterSprite.scale.y = 0.6;
    // Add sprites and filter to container
    stageContainer.addChild(filterSprite)
    stageContainer.addChild(imageSprite)
    stageContainer.filters = [displacementFilter]
    
    this.animateCanvas(filterSprite)
  }

  animateCanvas = (filterSprite) => {
    let count = 0    
    this.app.ticker.add((delta) => {
      filterSprite.x = count*10
      filterSprite.y = count*10
      count += 0.05
    })
  }

  resizeCanvas = () => {

  }


}

const styles = StyleSheet.create({
  homeContainer: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background:'white'
  },
  home: {
    height: '30%',
    width: '70%'
  },
})
