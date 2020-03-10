import React, {Component} from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import '../containers/App.css';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const BASE_URL = process.env.REACT_APP_BASE_URL

class GroupList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            title: '',
            description: '',
            image: null,
            preview: null,
            is_public: true,
        }
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/api/v1/`)
        .then(result => {
            console.log(result);
            this.setState({groups: result.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        console.log(this.state.groups)
        return(
            <div>
                <h2 className="mt-5">Your Collections</h2>
                <ul className="justify-content-center">
                    {this.state.groups.map(group => 
                    <CardDeck key={group.id}>
                        <Card bg="dark" text="white" style={{ width: '25rem' }} className="mt-5 mr-5" key={group.id}>
                            <Card.Img src={group.image} variant="top" alt="Uploaded content" />
                            <Card.Body>
                                <Card.Title>{group.title}</Card.Title>
                                <Card.Text>{group.description}</Card.Text>
                                <Card.Link href="/GroupDetail">View Collection</Card.Link>
                            </Card.Body>
                        </Card>
                    </CardDeck>)}
                </ul>
            </div>
        )
    }
}

export default GroupList