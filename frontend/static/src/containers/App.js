import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import SignUp from '../components/SignUp.js'
import LogIn from '../components/LogIn.js'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
          <Nav.Item componentClass='span'>
            <Nav.Link>
              <Link to="/" className="nav-link">Home</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item componentClass='span'>
            <Nav.Link>
              <Link to="/SignUp" className="nav-link">Sign Up</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item componentClass='span'>
            <Nav.Link>
              <Link to="/LogIn" className="nav-link">Log In</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item componentClass='span'>
            <Nav.Link>
              <Link to="/LogOut" className="nav-link">Log Out</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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

function LogOut() {
  return <h2>Log Out</h2>
}
