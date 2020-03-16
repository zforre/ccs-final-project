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

        

        axios.get(`${BASE_URL}/api/v1/profile/`)
        .then((res) => {
            console.log(res.data)
            this.setState({profiles: res.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        // console.log(this.state);
        return(
            <div className='Row' >
                {this.state.profiles.map(profile => 
                <Card className="mt-5 ml-5" key={profile.user} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={profile.avatar} />
                    <Card.Body>
                        <Card.Title>{profile.username}</Card.Title>
                        <Card.Text>
                            {profile.bio}
                        </Card.Text>
                        <Card.Text className="text-muted">
                            {profile.location}
                        </Card.Text>
                    </Card.Body>
                </Card>)}
                
                <GroupList />
            </div>
            
        )
    }

}

export default Profile