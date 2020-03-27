import React from 'react';
import LandingPage from './landingpage.js';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import { Switch, Route } from 'react-router-dom';

{/*https://medium.com/@khwsc1/step-by-step-guide-of-simple-routing-transition-effect-for-react-with-react-router-v4-and-9152db1566a0*/}

const Main = () => (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} /> 
      <Route path="/resume" component={Resume} />
    </Switch>
)
export default Main;