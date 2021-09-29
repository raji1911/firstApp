import React, {component}  from 'react';
import './App.css';
import {Button, Form ,FormGroup, Label, Input }
from 'reactstrap' ;

import {FacebookLoginButton, FacebooklogInButton} from 'react-social-login-buttons';

function App() {
  return (
    <Form className="login-form">
      <h1>
        <span className="front-weight-bold">myWebsite</span>.com
        </h1> 
        <h2 className ="text-center">Welcome</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder ="Email"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder ="Password"/>
        </FormGroup>
        <Button className="btn-lg  btn-dark  btn-block">
          Log in
        </Button>
        <div className="text-center pt-3">
          or continue with social account   
          </div>
          <FacebookLoginButton className="mt-3 mb-3"/>
          <div className="test-center">
            <a href="/sign-up">Sign up</a>
            <span className="p-2">|</span>
            <a href="/sign-up">Forgot password</a>
          </div>
    </Form>
  );
}

export default App;
