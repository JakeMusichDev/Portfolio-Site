import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Contact from '../containers/Contact';
import Art from '../containers/Art'

export const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/art" component={Art} />
    </Switch>
)
