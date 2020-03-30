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
            groups: null,
            id: '',
            image: null,
            title: null,
            description: null,
            
        }
    }

    componentDidMount() {

        console.log(this.props)
       
        const { id } = this.props.match.params
        

        axios.get(`${BASE_URL}/api/v1/${id}`)
        .then((res) => {
            console.log(res.data)
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
                
            <CardDeck key={this.state.id} className="mt-5 col-11">
                <Card className="card-style">
                    
                    <Card.Img src={this.state.image} variant="top" className="blur" />
                    <Card.Body >
                    <Card.Title> <h1>{this.state.title} </h1></Card.Title>
                    <Card.Text>
                        {this.state.description}
                    </Card.Text>
                    <Card.Link href={`/GroupUpdate/${this.state.id}`} className="custom-link"><i class="fa fa-pencil"></i></Card.Link>
                    <Beer group={this.props.match.params.id} />
                    <div className="w-100"></div>
                    <small className="">Last updated 3 mins ago</small>
                    </Card.Body>
                </Card>
            </CardDeck>
            </div>
            
        )
    }

}

export default GroupDetail