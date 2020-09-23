import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home.js'
import Medicines from './pages/medicines.js';
import Cosmetics from './pages/cosmetics.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/medicines">
          <Medicines />
        </Route>
        <Route path="/cosmetics">
          <Cosmetics />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
