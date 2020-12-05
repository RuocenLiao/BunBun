import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from
'react-router-dom';
import Home from './components/pages/Home';
import BunBun from './components/pages/bun-bun';
import Artogether from './components/pages/artogether';
import Pandabool from './components/pages/pandabool';
import AboutMe from './components/pages/About-me';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component=
          {Home}/>
          <Route path='/bun-bun' exact component=
          {BunBun}/>
          <Route path='/artogether' exact component=
          {Artogether}/>
          <Route path='/pandabool' exact component=
          {Pandabool}/>
          <Route path='/about-me' exact component=
          {AboutMe}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
