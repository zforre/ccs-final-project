import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import '../containers/App.css';
import axios from "axios";


class Question extends Component {

    constructor(props) {
      super(props);
      this.state = {
        
      }
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
  
    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        // console.log(this.state)
    
        formData.append('q1', this.state.q1);
        formData.append('q2', this.state.q2);
        formData.append('q3', this.state.q3);
        formData.append('q4', this.state.q4);
        formData.append('q5', this.state.q5);
        formData.append('q6', this.state.q6);

        console.log(this.state);
        // axios.post('api/v1/', formData);
        
        //answers get saved to profile in the backend
        axios.post(`${BASE_URL}/api/v1/`, formData, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then(res => {
    
          console.log(res);
        })
        .catch(error => {
    
          console.log(error);
        })
    }
  
        render() {
            // console.log('props', this.props)
            return  (
              
                <div className="row justify-content-center">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Are you into sweets?</Form.Label>
                            <Form.Control as="select" value={this.state.q1} onChange={this.handleChange}>
                            <option>Yes</option>
                            <option>No</option>
                            </Form.Control>
                        </Form.Group> 
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Apples or Oranges?</Form.Label>
                            <Form.Control as="select" value={this.state.q2} onChange={this.handleChange}>
                            <option>Apples</option>
                            <option>Oranges</option>
                            </Form.Control>
                        </Form.Group> 
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Salt or Sugar?</Form.Label>
                            <Form.Control as="select" value={this.state.q3} onChange={this.handleChange}>
                            <option>Salt</option>
                            <option>Sugar</option>
                            </Form.Control>
                        </Form.Group> 
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Do you drink your coffee black?</Form.Label>
                            <Form.Control as="select" value={this.state.q4} onChange={this.handleChange}>
                            <option>Yes</option>
                            <option>No</option>
                            </Form.Control>
                        </Form.Group> 
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Light or Heavy?</Form.Label>
                            <Form.Control as="select" value={this.state.q5} onChange={this.handleChange}>
                            <option>Light</option>
                            <option>Heavy</option>
                            </Form.Control>
                        </Form.Group> 
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Do you like red or white wine?</Form.Label>
                            <Form.Control as="select" value={this.state.q6} onChange={this.handleChange}>
                            <option>Red</option>
                            <option>White</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button> 
                    </Form>
                </div>
            )
        }
    
}
    
    export default Question;