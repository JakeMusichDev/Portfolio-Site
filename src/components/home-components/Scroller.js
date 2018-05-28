import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import _ from 'underscore'

import HomeMenu from './home-menu/HomeMenu'

export default class Scroller extends Component {
  constructor(props) {
    super(props)

    this.state = { currentItem: 0, direction: null }

    this.handleScroll = _.throttle(this.scrollMonitor, 1500, { trailing: false })
    window.addEventListener('wheel', this.handleScroll)
  }

  scrollMonitor = wheelEvent => {
    const direction = wheelEvent.deltaY > 0 ? '+' : '-'
    const { currentItem } = this.state
    let nextItem

    if (direction === '+' && currentItem === 2) {
      nextItem = 0
    } else if (direction === '+' && currentItem >= 0) {
      nextItem = currentItem + 1
    } else if (direction === '-' && currentItem !== 0) {
      nextItem = currentItem - 1
    } else if (direction === '-' && currentItem === 0) {
      nextItem = 2
    } else { return }

    this.setState({ currentItem: nextItem, direction })
  }

  render() {
    const { currentItem, direction } = this.state
    const { onSectionClick } = this.props

    return (
      <div className={css(styles.scroller)}>
        <HomeMenu
          onSectionClick={onSectionClick}
          currentItem={currentItem}
          direction={direction}
        />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  scroller: {
    height: '100vh',
    width: '100vw',
    border: "1px solid white",
  },
})

// import { Injectable } from '@angular/core';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
//
//
// declare var WheelIndicator: any;
// declare var Hammer: any;
// declare var _ : any;
//
// @Injectable()
// export class ScrollMainNavigationService  {
//
//    private current_page_source = new BehaviorSubject<number>(0);
//    private numberOfPillars: number = 4;
//    private currentPage = 0;
//    private scroll: any = null;
//    private touch: any = null;
//    private throttleWaitTime : number = 800;
//    private throttleKey : any;
//
//
//    current_page = this.current_page_source.asObservable();
//
//    constructor() { }
//
//    init = () => {
//      this.initScroll();
//      this.initTouch();
//      this.initKey();
//    }
//   destory = () => {
//     this.scroll.destroy();
//     this.touch.destroy();
//     this.destroyKey();
//   }
//
//
//
//   private initScroll = () => {
//     let throttleScroll = _.throttle(this.onScroll, this.throttleWaitTime, {trailing: false});
//     this.scroll = new WheelIndicator({
//       elem: window,
//       callback: throttleScroll,
//     });
//   }
//
//   private initTouch = () => {
//     this.touch = new Hammer.Manager(window, {
//       recognizers: [
//         [Hammer.Swipe],
//       ]
//     });
//     this.attachSwipeEvents();
//   }
//
//   private initKey = () => {
//     this.throttleKey = _.throttle(this.onKey, this.throttleWaitTime, {trailing: false});
//     window.addEventListener("keydown", this.throttleKey);
//   }
//
//   private onKey = (e) => {
//       if (e.keyCode === 40) {
//         this.pageChangeHandler('down');
//       } else if (e.keyCode === 38) {
//         this.pageChangeHandler('up');
//       } else {
//         return
//       }
//   }
//
//   private destroyKey = () => {
//     window.removeEventListener("keydown", this.throttleKey);
//   }
//
//
//   private onScroll = (e) => {
//       this.pageChangeHandler(e.direction);
//   }
//
//   private attachSwipeEvents = () => {
//     let throttleSwipeUp = _.throttle(this.swipUp, this.throttleWaitTime, {trailing: false});
//     let throttleSwipeDown = _.throttle(this.swipDown, this.throttleWaitTime, {trailing: false});
//     let _pageChangeHandler = this.pageChangeHandler;
//     //Swipe-Up-Event-Listener
//     this.touch.on("swipeup", throttleSwipeUp);
//     //Swipe-Down-Event-Listener
//     this.touch.on("swipedown", throttleSwipeDown);
//   }
//
//   private swipUp = (direction) => {
//     this.pageChangeHandler('down')
//   }
//
//   private swipDown = (direction) => {
//     this.pageChangeHandler('up')
//
//   }
//
//
//
//   pageChangeHandler = (direction) => {
//     if(direction === 'up' && this.currentPage === 0){
//       this.currentPage = 0; //this.currentPage = 4;
//     } else if (direction === 'down' && this.currentPage <= (this.numberOfPillars - 1)) {
//       this.currentPage = (this.currentPage + 1); // % (this.numberOfPillars + 1);
//     } else if (direction === 'up' && this.currentPage !== 0) {
//       this.currentPage--;
//     }
//     else {
//       return;
//     }
//     this.registerScroll(this.currentPage);
//   }
//
//   //registers the current_page for subscription
//   private registerScroll = (current_page) => {
//     this.current_page_source.next(current_page);
//   }
//
//   public reset = (pageNumber : number) => {
//     this.currentPage = pageNumber;
//   }
//
//
// }
