import React from 'react';
import Nav from 'react-bootstrap/Nav';
import SignUp from '../components/SignUp.js';
import Spotter from '../components/Spotter.js';
import ProfileSetup from '../components/ProfileSetup';
import ProfileEdit from '../components/ProfileEdit';
import LogIn from '../components/LogIn.js';
import Profile from '../components/Profile.js';
import GroupList from '../components/GroupList.js';
import GroupDetail from '../components/GroupDetail.js';
import GroupForm from '../components/GroupForm.js';
import GroupUpdate from '../components/GroupEdit.js';
import {Navbar} from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL


export default function App() {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" defaultactivekey="/">
          <Navbar.Brand href="/">brewSpotter</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/profile/user">Profile</Nav.Link>
              <Nav.Link href="/signup">Create an Account</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>
              <Nav.Link onClick={logOut} href="/login">Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/groupform" component={GroupForm}/>
          <Route path="/groupupdate/:id" component={GroupUpdate}/>
          <Route path="/groupdetail/:id" component={GroupDetail}/>
          <Route path="/grouplist" component={GroupList}/>
          <Route path="/profile/:user" component={Profile}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/profilesetup" component={ProfileSetup}/>
          <Route path="/profileedit" component={ProfileEdit}/>
          <Route path='/' exact component={Spotter}/>
        </Switch>
      </div>
    </Router>
  );
}

function logOut() {
  axios.post(`${BASE_URL}/rest-auth/logout/`)
    .then(res => {
        localStorage.removeItem('my-app-user');
        console.log('one', res);
        // this.context.history.push('/login');
    })
    .catch(error => {
        console.log(error);
    });
}

