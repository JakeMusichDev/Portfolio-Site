import React, {
  Component, PropTypes
} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'

// import Socials from '../components/contact-components/Socials'

// import backgroundImg from '../../assets/home/home_bk.jpeg'

export default class Art extends Component {

    render() {
        return (
            <div className={css(styles.artContainer)}>

            </div>
        )
    }


}

const styles = StyleSheet.create({
    artContainer: {
    height: '100vh',
    background: `black`,
    backgroundSize: 'cover',
    padding:"10%"
  }
})
