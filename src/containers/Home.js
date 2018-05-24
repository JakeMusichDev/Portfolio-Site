import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import Scroller from '../components/home-components/Scroller'
import TitleHeader from '../components/general-components/TitleHeader'

import backgroundImg from '../../assets/home/home_bk.jpeg'
import displacementImg from '../../assets/home/displacementMapTile.jpg'

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
      <div className={css(styles.homeContainer)}>
        <div ref={(thisDiv) => {component.canvasAnchor = thisDiv}} />
        <Scroller />
      </div>
    )
  }



  initPixi = () => {
    this.setupApp()

    var displacementSprite = PIXI.Sprite.fromImage("http://i.imgur.com/2yYayZk.png")

    //load an image and run the `setup` function when it's done
    PIXI.loader
      .add(`${backgroundImg}`)
      .on("progress", loadProgressHandler)
      .load(setup);

    const progressHandler = function() {
      console.log("loading");
    }

    var displacementSprite = PIXI.Sprite.fromImage(`${displacementImg}`);
    var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

    displacementSprite.scale.y = 0.1;
    displacementSprite.scale.x = 0.1;

    function setup() {
      const back = new Sprite(resources[`${backgroundImg}`].texture)
      back.height = window.innerHeight
      back.width = window.innerWidth

      back.filters = [new PIXI.filters.BlurFilter()]

      this.app.stage.filters = [displacementFilter]
      this.app.stage.addChild(displacementFilter)
      this.app.stage.addChild(back)
    }

  };

  setupApp = () => {
    //Create a Pixi Application
    this.app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        antialias: true,
        transparent: false,
        resolution: 1
      }
    );

    //Add the canvas that Pixi automatically created for you to the canvas container
    this.canvasAnchor.appendChild(this.app.view);
  };

  setImg = () => {
    const back = new Sprite(resources[`${backgroundImg}`].texture)
    back.height = window.innerHeight
    back.width = window.innerWidth

    this.app.stage.filters = [displacementFilter]
    this.app.stage.addChild(displacementFilter)
    this.app.stage.addChild(back)
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




// var width = window.offsetWidth;
// var height = window.offsetHeight;
// var playground = document.getElementById('px-render');
//
// var canvas;
//
// var ratio = 150 / 830;
//
// var count = 0;
// var raf;
//
//
// var renderer = PIXI.autoDetectRenderer(width, height, {transparent:true});
// renderer.autoResize = true;
// var tp, preview;
// var displacementSprite,
// displacementFilter,
// stage;
//
// function setScene(url){
//       playground.appendChild(renderer.view);
//
//         stage = new PIXI.Container();
//
//         tp = PIXI.Texture.fromImage(url);
//         preview = new PIXI.Sprite(tp);
//
//         preview.anchor.x = 0;
//
//         displacementSprite = PIXI.Sprite.fromImage('https://res.cloudinary.com/dvxikybyi/image/upload/v1486634113/2yYayZk_vqsyzx.png');
//         displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
//
//         displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
//
//         displacementSprite.scale.y = 0.6;
//         displacementSprite.scale.x = 0.6;
//
//
//         stage.addChild(displacementSprite);
//
//         stage.addChild(preview);
//
//     animate();
// }
//
// function removeScene(){
// cancelAnimationFrame(raf);
// stage.removeChildren();
// stage.destroy(true);
// playground.removeChild(canvas);
// }
//
//
// function animate() {
//   raf = requestAnimationFrame(animate);
//
//   displacementSprite.x = count*10;
// displacementSprite.y = count*10;
//
// count += 0.05;
//
//   stage.filters = [displacementFilter];
//
//   renderer.render(stage);
//
//   canvas = playground.querySelector('canvas');
// }
//
// setScene('https://unsplash.it/600/?random');
