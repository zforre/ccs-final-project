import React, {Component} from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../containers/App.css';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const BASE_URL = process.env.REACT_APP_BASE_URL

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post(`${BASE_URL}/rest-auth/registration/`, this.state)
    .then(res => {
        console.log('two', res)
        localStorage.setItem('my-app-user', JSON.stringify(res.data));
        this.props.history.push('/');
    })
    .catch(error => {
        console.log(error);
    });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    console.log('props', this.props)
    return  (
        <div className="d-flex justify-content-center create-profile-container mt-5">
            <Form className="profile-form" onSubmit={this.handleSubmit}>
                <h2 className="form-title d-flex justify-content-center"><span>Sign Up</span></h2>
                <Form.Group>
                    <Form.Label className="Form-label">Username:</Form.Label>
                    <Form.Control  type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder='Enter username' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="Form-label">Email:</Form.Label>
                    <Form.Control  type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Enter email' required />
                    <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="Form-label">Password:</Form.Label>
                    <Form.Control  type="password" name="password1" value={this.state.password1} onChange={this.handleChange} placeholder='Enter password' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="Form-label"> Confirm Password:</Form.Label>
                    <Form.Control  type="password" name="password2" value={this.state.password} onChange={this.handleChange} placeholder='Enter password' required />
                </Form.Group>
                <Button className="login-Btn" type='submit'>Sign Up</Button>
            </Form>
      </div>
    )
  }
}

export default SignUp;