import logo from './logo.svg';
import React, { Fragment } from 'react';

import './App.css';

import SignUpFormPrint from './components/Signup/SignUpFormPrint';
import Login from './components/Login/Login';

function App() {
  return (
    <Fragment>
      {/* <SignUpFormPrint></SignUpFormPrint> */}
      <Login></Login>
    </Fragment>
  );
}

export default App;
