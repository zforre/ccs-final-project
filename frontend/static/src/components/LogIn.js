import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
// import Header from "./Header";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/api/v1/rest-auth/login/', this.state)
    .then(res => {
        localStorage.setItem('my-app-user', JSON.stringify(res.data));
        this.props.history.push('/');
        window.location.reload(false);
    })
    .catch(error => {
        console.log(error);
    });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

    handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }

  render() {


    return  (
            <div className="d-flex create-profile-container">
                <Form className="profile-form" onSubmit={this.handleSubmit}>
                    <h2 className="form-title d-flex justify-content-center">Login</h2>
                    <Form.Group >
                        <Form.Label className="Form-label">Username:</Form.Label>
                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder='Enter username' required />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label className="Form-label">Email:</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Enter email' required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="Form-label">Password:</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder='Enter password' required />
                        <Form.Text className="text-muted" >
                        Don't have an acount? <a  href="/signup/"><span className="login-Btn SignUp-btn">Click here to Sign up.</span></a>
                        </Form.Text>
                    </Form.Group>
                    <Button className="login-Btn" onclick={handleClick}>Login</Button>
                </Form>
            </div>
    )
  }
}

export default LogIn;