import React, {Component} from 'react';
import Beer from './Beer.js'
import {CardDeck, Card, Container, Row} from 'react-bootstrap'
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
            <Container>
                
            <CardDeck className="row mt-5" key={this.state.id}>
                <Card className="card-style col">
                    <Row>
                        <Card.Img src={this.state.image} variant="top" />
                        <Card.ImgOverlay>
                            <Row>
                                <div className="circle ml-3">
                                    <Card.Link href={`/groupupdate/${this.state.id}`} className="custom-link edit"><i class="fa fa-pencil"></i></Card.Link>
                                </div>
                            </Row>
                        </Card.ImgOverlay>
                    </Row>
                    <Row>
                        <Card.Body >
                            <Card.Title className="ml-3"> <h1>{this.state.title} </h1> </Card.Title>
                            <Card.Text className="ml-4">
                                {this.state.description}
                            </Card.Text>
                            <Beer group={this.props.match.params.id} />
                        </Card.Body>
                    </Row>
                </Card>
            </CardDeck>
            </Container>
            
        )
    }

}

export default GroupDetail