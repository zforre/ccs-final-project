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
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';
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
        <Navbar bg="dark" variant="dark" defaultactivekey="/spotter">
          <Navbar.Brand href="/spotter">brewSpotter</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/profile/user">Profile</Nav.Link>
              <Nav.Link href="/signup">Create an Account</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>
              <Nav.Link onClick={logOut} href="/login">Log Out</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/spotter' component={Spotter}/>
          <Route path="/groupform" component={GroupForm}/>
          <Route path="/groupupdate/:id" component={GroupUpdate}/>
          <Route path="/groupdetail/:id" component={GroupDetail}/>
          <Route path="/grouplist" component={GroupList}/>
          <Route path="/profile/:user" component={Profile}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/profilesetup" component={ProfileSetup}/>
          <Route path="/profileedit" component={ProfileEdit}/>
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

