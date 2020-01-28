import React from 'react';
import { useState } from 'react';
// React Router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Global, css } from '@emotion/core';
// Pages
import Home from './pages/Home';
import Resume from './pages/Resume';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  
  const [isHome, setIsHome] = useState(true);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
