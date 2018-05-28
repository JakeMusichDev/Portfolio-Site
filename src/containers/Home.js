import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'

import Scroller from '../components/home-components/Scroller'

import PixiDisplacementImage from '../components/general-components/PixiDisplacementImage'

export default class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div id="home" className={css(styles.homeContainer)}>
        <PixiDisplacementImage />
        <Scroller onSectionClick={this.onSectionClick} />
      </div>
    )
  }

  onSectionClick = (event, section) => {
    const tl = Anime.timeline()
    console.log('hit')

    tl.add({
      targets: '#line',
      width: '800px',
      duration: 2000,
    })
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    height: '100vh',
  },
  homeMenu: {
    height: '60vh',
    width: '1px',
    position: 'absolute',
    top: '20vh',
    right:'5vw',
    // marginLeft:'100',
    border: '0.25px solid white',
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
