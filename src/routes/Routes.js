import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Contact from '../containers/Contact';

export const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
)
