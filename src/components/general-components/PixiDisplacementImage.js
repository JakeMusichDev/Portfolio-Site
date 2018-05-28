import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import * as PIXI from 'pixi.js'
import Anime from 'animejs'

import backgroundImg from '../../../assets/home/home_bk.jpeg'
import displacementFilterImg from '../../../assets/home/displacementFilterHome.jpeg'

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
    const anchorBounds = this.canvasAnchor.getBoundingClientRect()
    //Create the main image sprite
    const imageSprite = new PIXI.Sprite(PIXI.loader.resources['background'].texture)
    imageSprite.height = anchorBounds.height
    imageSprite.width = anchorBounds.width

    this.filterSprite = new PIXI.Sprite(PIXI.loader.resources['filter'].texture)
    this.filterSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    this.filterSprite.anchor.set(0)

    this.filterSprite = new PIXI.filters.DisplacementFilter(this.filterSprite)

    this.filterSprite.scale.x = 0;
    this.filterSprite.scale.y = 0;

    this.app.stage.filters = [this.filterSprite]

    this.app.stage.addChild(imageSprite)
    this.animateCanvas()
    // animate(this.displacementFilter, this.count)

    // function animate(sprite, count) {
    //   console.log(sprite.scale);
      
    //   sprite.scale.x =  count * 10
    //   count += 0.01
    //   const loop = window.requestAnimationFrame(animate.bind(this))
    // }
  }

  animateCanvas = () => {
    // this.filterSprite.scale.x = this.count * 10
    this.filterSprite.scale.y = this.count * 10

    this.count += 0.02
    const loop = window.requestAnimationFrame(this.animateCanvas.bind(this))

    // if ( this.count === 0 ) {
    //   this.count += 0.01

    // } else if ( this.count <= 100 ) {
    //   this.count += 0.01

    // } else if ( this.count >= 100) {
    //   this.count -= 0.05
      
    // }
    
    
    // if (this.count >= 100) {
    //   window.cancelAnimationFrame(loop);
    // }
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
    background:'black',
  },
  home: {
    height: '400px',
    width: '500px',
    // position: "absolute",
    // top: '10vh',
    // left: "10vw",

  },
})
