import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Jobs from './Pages/Jobs/Jobs';

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={Jobs} />
      </Switch>
    </Router>
  );
}

export default App;
