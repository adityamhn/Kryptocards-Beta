import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Hero} />
      </Switch>
    </Router>
  );
}

export default App;
