import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { ContactUsPage } from './Pages/Contact/ContactUsPage';
import Navbar from './Components/Navbar';

import { ComingSoon } from './Pages/ComingSoon/ComingSoon';
import { Home } from './Pages/Home/Home';
import { Tiers } from './Pages/Tiers/Tiers';
import { Jobs } from './Pages/Jobs/Jobs';
 
function App() {
  return (

    <Router >
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={ContactUsPage}/>
        <Route exact path="/coming-soon" component={ComingSoon}/>
        <Route exact path="/tiers" component={Tiers}/>
        <Route exact path="/jobs" component={Jobs}/>
        <Redirect to="/"/>
      </Switch>

    </Router>
        

  );
}

export default App;
