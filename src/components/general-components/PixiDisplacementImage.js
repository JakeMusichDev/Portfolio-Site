import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import * as PIXI from 'pixi.js'
import Anime from 'animejs'

import backgroundImg from '../../../assets/home/home_bk.jpeg'
import backgroundImg2 from '../../../assets/home/home_bk_2.jpeg'
import drum from '../../../assets/photography/drum.JPG'
import displacementFilterImg from '../../../assets/home/displacementFilterHome.jpeg'
import blueShmear from '../../../assets/painting/blue-schmear.png'

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
    Anime({
      targets: this.canvasAnchor,
      opacity:[0,1],
      duration: 2000,
    })
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.nextBackgroundImage(nextProps)
  }

  render() {
    let component = this;
    return (
      <div
        className={css(styles.homeContainer)}>
        <div
          id='home-pixi'
          className={css(styles.home)}
          ref={thisDiv => {
            component.canvasAnchor = thisDiv
          }}
        />
      </div>
    )
  }

  initPixi = () => {
    if (!PIXI.loader.resources['background-2']) {
      this.loaderConfig()
    } else {
      this.buildApp()
    }
  }

  loaderConfig = () => {
    PIXI.loader
      .add('background-0', `${backgroundImg}`)
      .add('background-1', `${blueShmear}`)
      .add('filter', `${displacementFilterImg}`)
      .add('background-2', `${drum}`)
      
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
      interactive:true,
    })

    // this.app.renderer.resize(anchorBounds.height, anchorBounds.width)
    this.canvasAnchor.appendChild(this.app.view)

    this.attachFilteredImage()
  }

  attachFilteredImage = () => {
    // Create stage
    this.stageContainer = new PIXI.Container()
    this.app.stage.addChild(this.stageContainer)
    
    // Create Image itself
    const imageSprite = new PIXI.Sprite(PIXI.loader.resources['background-0'].texture)
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
    this.stageContainer.addChild(filterSprite)
    this.stageContainer.addChild(imageSprite)
    this.stageContainer.filters = [displacementFilter]
    
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

  
  nextBackgroundImage = (nextProps) => {
    const {currentItem} = nextProps
    const imageSprite = new PIXI.Sprite(PIXI.loader.resources[`background-${currentItem}`].texture)
    imageSprite.autoFit = true
    imageSprite.scale.set(0.3, 0.3)
    imageSprite.anchor.set(0.2,0.2)
    this.stageContainer.addChild(imageSprite)
  }

  resizeCanvas = () => {

  }


}

const styles = StyleSheet.create({
  homeContainer: {
    height: '100%',
    width: '100%',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // background:'#F2F2F2',
    background: 'rgb(15,15,15)',
    // border:'1px solid red'
  },
  home: {
    height: '100%',
    width: '100%',
    // border: '1px solid white',/
    overflow: 'hidden',
    // boxShadow: '1px 1px 1px 1px 3px #F2F2F2'
  },
})
