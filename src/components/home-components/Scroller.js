import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Scroller extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollLock: false,
      direction:'',
      animating:false
    }

    this.handleScroll = this._handleScroll.bind(this)
  }

  componentDidMount() {}

  _handleScroll = (e) => {
    // const
    const nextDirection = e.deltaY > 0 ? 'up' : 'down'
    if( !this.state.scrollLock && nextDirection !== this.state.direction ) {
      this.setState({
        scrollLock:true,
        direction: nextDirection
      })
    }


  }

  isSignificant = () => {

  }

  render() {
    return (
      <div
        className={css(styles.scroller)}
        onWheel={this.handleScroll}
      >
        {this.props.children}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  scroller: {
    height: '100vh'
  }
})
