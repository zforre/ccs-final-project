import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import SignUp from '../components/SignUp.js'
import LogIn from '../components/LogIn.js'
import GroupList from '../components/GroupList.js'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



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
            <Nav.Link href ="/" className="nav-link">Home</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href ="/SignUp" className="nav-link">Sign Up</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href ="/Login" className="nav-link">Log In</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link onClick={logOut} className="nav-link">Log Out</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href ="/GroupList"className="nav-link">Collections</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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
  console.log('You Logged out')
}
