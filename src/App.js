import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import './App.css';

import Sidebar from './sidebar';
import Dash from './dash';
import Top from './topbar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Users from "./users";

import Create from "./create";
import Read from "./read";
import Update from "./update";
import Delete from "./delete";

import Profile from "./profile";

function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Top></Top>
              <div class="container-fluid">
                <Switch>
                  <Route path="/dashboard" exact="true">
                    <Dash></Dash>
                  </Route>
                  <Route path="/users" exact="true">
                    <Users></Users>
                  </Route>

                  <Route path="/profile" exact="true">
                    <Profile></Profile>
                  </Route>

                  <Route path="/create" exact="true">
                    <Create></Create>
                  </Route>
                  <Route path="/read" exact="true">
                    <Read></Read>
                  </Route>
                  <Route path="/update/:id" component={Update}>
                  </Route>
                  <Route path="/delete" exact="true">
                    <Delete></Delete>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;