import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import SignUp from '../components/SignUp.js'
import LogIn from '../components/LogIn.js'
import GroupList from '../components/GroupList.js'
import GroupDetail from '../components/GroupDetail.js'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL



// import axios from 'axios'

// class App extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         beers: []

//       }
//   }

//   componentDidMount() {
    
//   }
  
//   render() {
    
//     return (
//       <div className="App">

//       <SignUp />
//       <LogIn />
        
//       </div>
//     );
//   }
// }

// export default App;

export default function App() {
  return (
    <Router>
      <div>
        <Nav defaultActiveKey="/home">
          <Nav.Item className='span'>
            <Nav.Link href ="/">Home</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href ="/SignUp">Sign Up</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href ="/Login">Log In</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link onClick={logOut}>Log Out</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href ="/GroupList">Collections</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/GroupDetail">
            <GroupDetail />
          </Route>
          <Route path="/GroupList">
            <GroupList />
          </Route>
          <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function logOut() {
  axios.post(`${BASE_URL}/rest-auth/logout/`)
    .then(res => {
        console.log('one', res)
    })
    .catch(error => {
        console.log(error);
    });
}
