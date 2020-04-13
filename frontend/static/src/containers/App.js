import React from 'react';
import SignUp from '../components/SignUp.js';
import Spotter from '../components/Spotter.js';
import ProfileSetup from '../components/ProfileSetup.js';
import ProfileEdit from '../components/ProfileEdit.js';
import LogIn from '../components/LogIn.js';
import Profile from '../components/Profile.js';
import GroupList from '../components/GroupList.js';
import GroupDetail from '../components/GroupDetail.js';
import GroupForm from '../components/GroupForm.js';
import GroupUpdate from '../components/GroupEdit.js';
import PrivateRoute from '../components/Private.js';
import NavBar from '../components/Header.js';
import AboutUs from '../components/About.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL


export default function App() {
  return (
    
    <Router>
      <div>
      <NavBar/>
        <Switch>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <PrivateRoute path='/' exact component={Spotter}/>
          <PrivateRoute path="/groupform" component={GroupForm}/>
          <PrivateRoute path="/groupupdate/:id" component={GroupUpdate}/>
          <PrivateRoute path="/groupdetail/:id" component={GroupDetail}/>
          <PrivateRoute path="/grouplist" component={GroupList}/>
          <PrivateRoute path="/profile/:profileId/edit" component={ProfileEdit}/>
          <PrivateRoute path="/profile/:profileId" component={Profile}/>
          <PrivateRoute path="/profilesetup" component={ProfileSetup}/>
        </Switch>
      </div>
    </Router>
  );
}


