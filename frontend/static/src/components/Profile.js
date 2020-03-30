import React, {Component} from 'react';
import GroupList from '../components/GroupList.js'
import {Card} from 'react-bootstrap'
import '../containers/App.css';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const BASE_URL = process.env.REACT_APP_BASE_URL

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
            avatatar: '',
            user: '',
            username: '',
            bio: '',
            location: '',
            birth_date: ''
        }
    }

    componentDidMount() {

        

        axios.get(`${BASE_URL}/api/v1/profile/user/`)
        .then((res) => {
            console.log(res.data)
            this.setState(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        // console.log(this.state);
        return(
            <div>
            <div className="row">
                 <Card className="mt-5 ml-5 col-sm-12 col-md-3 card-style" key={this.state.user} style={{ width: '18rem' }}>
                    <Row>
                        <Card.Img variant="top" src={this.state.avatar} />
                    </Row>
                    <Card.Body>
                        <Card.Title>{this.state.user.username}</Card.Title>
                        <Card.Text>{this.state.bio}</Card.Text>
                        <Card.Text className="">{this.state.location}</Card.Text>
                        <Card.Link href="/profileedit" className="custom-link"><i class="fa fa-pencil"></i></Card.Link>
                    </Card.Body>
                </Card>
            </div>
                <GroupList />
            </div>
            
        )
    }

}

export default Profile