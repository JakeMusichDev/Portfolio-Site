import React, {
  Component, PropTypes
} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'

import Socials from '../components/contact-components/Socials'

export default class Contact extends Component {

  render() {
    return (
      <div className={css(styles.contactContainer)}>
        <div className={css(styles.greeting)}>
          {"Connections are cool"} <br/>
          {"Let'"}
        </div>
        <div className={css(styles.socialContainer)}>
        <Socials />
        </div>
      </div>
    )
  }


}

const styles = StyleSheet.create({
  contactContainer: {
    height: '100vh',
    background: `black`,
    backgroundSize: 'cover',
  },
  greeting: {
    height: '30vh',
    color:"white"
  },
})
