import React, {Component} from 'react';
import GroupList from '../components/GroupList.js'
import {Card, Row, Container} from 'react-bootstrap'
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
        const options = {
            headers: {
              'Authorization': `Token ${JSON.parse(localStorage.getItem('my-app-user')).key}`,
            }
          }

        axios.get(`${BASE_URL}/api/v1/`, options)
        .then((res) => {
            console.log(res.data)
            this.setState({groups: res.data})
        })
        .catch(error => {
            console.log(error);
        })
        axios.get(`${BASE_URL}/api/v1/profile/user`, options)
        .then((res) => {
            console.log(res.data)
            this.setState(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const profile = JSON.parse(localStorage.getItem('my-app-user')).profile;
      if(!profile) {
        this.props.history.push(`/profilesetup`);
      }

        // console.log(this.state);
        return(
            <Container>
            <Row>
                 <Card className="m-5 col-md-3 card-style" key={this.state.user} style={{ width: '18rem' }}>
                    <Row>
                        <Card.Img variant="top" src={this.state.avatar} />
                        <Card.ImgOverlay>
                            <Row>
                                <div className="circle ml-3">
                                    <Card.Link href={`${BASE_URL}/profile/${profile}/edit`} className="custom-link"><i className="fa fa-pencil"></i></Card.Link>
                                </div>
                            </Row>
                        </Card.ImgOverlay> 
                    </Row>
                    <Card.Body>
                        <Card.Title>{this.state.user.username}</Card.Title>
                        <Card.Text>{this.state.bio}</Card.Text>
                        <Card.Text className="">{this.state.location}</Card.Text>
                    </Card.Body>
                </Card>
            </Row>
                <GroupList groups={this.state.groups}/>
            </Container>
            
        )
    }

}

export default Profile