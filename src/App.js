import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//BrowserRouter: allows to change the current page without leaving the page
//Route: specify the link roud, works similar to href and specify the path
// Switch: only match and loads one component

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import Gallery from './components/Gallery'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
