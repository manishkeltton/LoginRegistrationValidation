import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import FormSignIn from '../components/FormSignIn';
import FormSignup from '../components/FormSignup';

import Paths from './Paths';
  
  function Routes({submitForm}) {
      return (
              <Router>
                  <Switch>
                    <Route exact path={Paths.SIGNUP}><FormSignup /></Route>
                    <Route path={Paths.SIGNUP}>
                        <FormSignIn submitForm={submitForm} />
                    </Route>
                  </Switch>
              </Router>
      )
  }
  
  export default Routes
  