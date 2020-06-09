import React from 'react';
import './App.css';
import Header from './board_components/Header';
import { AppBar } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Created } from './pages/Created';

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar position="sticky" color="transparent">
          <Header></Header>
        </AppBar>
        <Switch>
          <Route path="/" exact>
            <Created />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
