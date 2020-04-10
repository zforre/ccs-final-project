import React, {Component} from 'react';
import axios from "axios";
import {Form, Button} from 'react-bootstrap';
import '../containers/App.css';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const BASE_URL = process.env.REACT_APP_BASE_URL

class ProfileEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
      bio: '',
      location: '',
      birthdate: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  componentDidMount() {
    const options = {
      headers: {
        'Authorization': `Token ${JSON.parse(localStorage.getItem('my-app-user')).key}`,
      }
    }

    axios.get(`${BASE_URL}/api/v1/profile/user/`, options)
    .then((res) => {
        // console.log('res', res);
        this.setState(res.data)
    })
    .catch(error => {
        console.log('error', error);
    })
  }

  handleSubmit(e) {
    e.preventDefault();
        let formData = new FormData();
        // console.log(this.state)

        formData.append('avatar', this.state.avatar);
        formData.append('bio', this.state.bio);
        formData.append('location', this.state.location);
        formData.append('birthdate', this.state.birthdate);


        console.log(this.state);
        // axios.post('api/v1/', formData);
    
        axios.patch(`${BASE_URL}/api/v1/profile/user/`, formData, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then(res => {
    
          console.log(res);
          this.props.history.push('/profile/user');
        })
        .catch(error => {
    
          console.log(error);
        })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleImage(e) {
    console.log(e.target.files);
    let file = e.target.files[0];
    this.setState({avatar: file});

  }

  render() {
    // console.log('props', this.props)
    return  (
        <div className="d-flex justify-content-center create-profile-container mt-5">
            <Form className="profile-form" onSubmit={this.handleSubmit}>
                <h2 className="form-title d-flex justify-content-center"><span>Edit Your Profile</span></h2>
                <Form.Group>
                    <Form.Label className="Form-label">Bio:</Form.Label>
                    <Form.Control as="textarea" rows="3" type="text" name="bio" value={this.state.bio} onChange={this.handleChange} placeholder='Tell us about yourself.' required />
                    <Form.Text className="text-muted">
                            This will be displayed on your profile page.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="Form-label">Location:</Form.Label>
                    <Form.Control  type="text" name="location" value={this.state.location} onChange={this.handleChange} placeholder='Greenville, SC' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="Form-label"> Birth date:</Form.Label>
                    <Form.Control  type="date" name="birthdate" value={this.state.birthdate} onChange={this.handleChange} placeholder='mm/dd/yyyy' required />
                    <Form.Text className="text-muted">
                            This will not be displayed on your profile page.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-5">
                    <Form.Label>Upload an Avatar Image</Form.Label>
                    <Form.Control type="file" name='avatar' onChange={this.handleImage}/>
                </Form.Group>
                <Button className="login-Btn" type='submit' >Save Changes</Button>
            </Form>
      </div>
    )
  }
}

export default ProfileEdit;