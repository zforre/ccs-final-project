import React, {Component} from 'react';
import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn.js'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        beers: []

      }
  }

  componentDidMount() {
    
  }
  
  render() {
    
    return (
      <div className="App">
        <SignUp />
        <LogIn />
        
      </div>
    );
  }
}

export default App;
