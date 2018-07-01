// import React, { Component } from 'react';
// import { StyleSheet, css } from 'aphrodite/no-important';
// import Button from '../general-components/Button';
// import { home } from '../../utils/copy';
// import { colors, breakPoints, easing } from '../../utils/style';
// import Anime from 'animejs';
// import LandingButtons from './LandingButtons';

// export default class DesktopTagline extends Component {

//   componentDidMount() {
//     this.animateIn();
//   }

//   render() {
//     return (
//       <div className={css(styles.desktopTaglineContainer)}>

//         <div className={css(styles.taglineContainer)}>
//           <div className={css(styles.taglineWrapper)}>
//             <h1 id="tagline-1" className={css(styles.tagline)}>{home.tagline1}</h1>
//           </div>
//           <div className={css(styles.taglineWrapper)}>
//             <h1 id="tagline-2" className={css(styles.tagline)}>{home.tagline2}</h1>
//           </div>

//           <div className={css([styles.taglineWrapper])}>
//             <h1 id="tagline-3" className={css(styles.tagline, styles.tagline3)}>{home.tagline3}</h1>
//           </div>
//         </div>

//         <LandingButtons/>

//     </div>

//     );
//   }


//   animateIn = () => {
//     // Setup initial states
//     this.animation = Anime.timeline().add({
//       targets: ['#tagline-1', '#tagline-2', '#tagline-3'],
//       translateY: 150,
//       duration: 0,
//       delay: 800
//     }).add({
//       targets: '#tagline-1',
//       duration: 1200,
//       easing: 'easeInOutQuint',
//       translateY: 0,
//       elasticity: 0,
//     }).add({
//       targets: '#tagline-2',
//       duration: 1200,
//       easing: 'easeInOutQuint',
//       translateY: 0,
//       elasticity: 0,
//       offset: '-=800'
//     }).add({
//       targets: '#tagline-3',
//       duration: 1200,
//       easing: 'easeInOutQuint',
//       translateY: 0,
//       elasticity: 0,
//       offset: '-=900'
//     })
//   }

// }


// const styles = StyleSheet.create({
//   desktopTaglineContainer: {
//     position: 'absolute',
//     transform: 'translateY(-50%)',
//     transition: '.1s all',
//     width: '25%',
//     height: '27.5vh',
//     left: '10vw',
//     top: '50%',
//     zIndex: 2,
//     letterSpacing:"-1.2",
//     [breakPoints.desktop]: {
//       width: '33%',
//       height: '27.5vh',
//       left: '5vw',
//       top: '50%',
//       zIndex: 2,
//       minHeight: '280px',
//       minWidth: '350px',
//     },
//   },

//   taglineContainer: {
// 		transition: '0.2s left, 0.2s marginTop',
// 		transitionTimingFunction: easing.fn,
//     left: 0,
//     width: '100%',
// 	},

// 	taglineWrapper: {
// 		overflow: 'hidden',
//     float: 'left',
//     marginRight: 15,
// 	},

// 	tagline: {
// 		lineHeight: 1,
// 		marginTop: 0,
// 		transform: 'translateY(150px)',
//     fontSize: '4.5vw',
//     marginBottom: 0,
//     width: '100%',
//     fontFamily:'bold',
// 	},
//   tagline3: {
//     marginBottom: 40
//   }
// })