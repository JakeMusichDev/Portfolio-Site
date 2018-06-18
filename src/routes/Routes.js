import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Contact from '../containers/Contact';
import PhotoView from '../containers/PhotoView'
import PaintingView from '../containers/PaintingView'

export const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/photography" component={PhotoView} />
      <Route exact path="/painting" component={PaintingView} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
)
