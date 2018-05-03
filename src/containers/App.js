import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import {Routes} from '../routes/Routes';

export default class App extends Component {

	render() {
		return (
      <Router>
        <Routes />
      </Router>
    )
	}
}
