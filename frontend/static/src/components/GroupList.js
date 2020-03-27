import React, {Component} from 'react';
import {Card, CardDeck, Button, Row, Container} from 'react-bootstrap';
import '../containers/App.css';
import axios from 'axios';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const BASE_URL= process.env.REACT_APP_BASE_URL

class GroupList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            id: '',
            title: '',
            description: '',
            image: null,
            preview: null,
            is_public: true,
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(group) {
        console.log(this.state.id)
        axios.delete(`${BASE_URL}/api/v1/${group.id}`)
        .then(res => {
            // console.log(res);
            // console.log(res.data);
            let groups = [...this.state.groups];
            const INDEX = groups.indexOf(group);
            groups.splice(INDEX, 1);
            this.setState({groups: groups})
        })
        .catch(error => {
            console.log(error);
        });
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
        // console.log('group list', this.props)
        // console.log(this.state.groups)
        return(
            <Container>
                <h3 className="mt-5">My Collection's</h3>
                <div className="collect ml-5 row">
                    {this.state.groups.map(group => 
                    <CardDeck key={group.id} style={{ width: '35rem' }}>
                        <Card bg="dark" text="white" className="mt-5 mr-5 col-sm-12 col-6" >
                            <Row>
                                <Card.Img src={group.image} variant="top" alt="Uploaded content" />
                            </Row>
                            <Card.Body>
                                <Card.Title>{group.title}</Card.Title>
                                <Card.Text>{group.description}</Card.Text>
                                <Card.Link href={`/GroupDetail/${group.id}`} className="alert-link">View Collection</Card.Link>
                                <Card.Link onClick={() => this.handleDelete(group)} type="submit" className="text-danger">Remove</Card.Link>
                            </Card.Body>
                        </Card>
                    </CardDeck>)}
                </div>
            <div className="row">
                <Button href="/GroupForm" variant="primary" className="mt-5 mb-5">Create new Collection</Button>
            </div>
            </Container>
        )
    }
}

export default GroupList