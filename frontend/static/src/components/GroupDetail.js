import React, {Component} from 'react';
import Beer from './Beer.js'
import {CardDeck, Card} from 'react-bootstrap'
import '../containers/App.css';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken'; 

const BASE_URL = process.env.REACT_APP_BASE_URL

class GroupDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group: null,
            image: null,
            title: null,
            description: null,
        }
    }

    componentDidMount() {
       
        const { id } = this.props.match.params
        

        axios.get(`${BASE_URL}/api/v1/${id}`)
        .then((res) => {
            // console.log(res.data)
            this.setState(() => ( res.data ))
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        // console.log(this.state);
        return(
            <div className="row justify-content-center">
            <CardDeck className="mt-5 col-11">
                <Card className="bg-dark text-white">
                    
                    <Card.Img src={this.state.image} variant="top" className="blur" />
                    <Card.Body >
                    <Card.Title> <h1>{this.state.title} </h1></Card.Title>
                    <Card.Text>
                        <p>{this.state.description}</p>
                    </Card.Text>
                    <Card.Link href="#" className="alert-link">Edit Collection</Card.Link>
                    <Beer />
                    <div className="w-100"></div>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Body>
                </Card>
            </CardDeck>
            </div>
            
        )
    }

}

export default GroupDetail