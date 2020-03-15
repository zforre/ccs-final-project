import React, {Component} from 'react';
import GroupList from '../components/GroupList.js'
// import {Figure} from 'react-bootstrap'
import '../containers/App.css';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const BASE_URL = process.env.REACT_APP_BASE_URL

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            username: '',
            bio: '',
            location: '',
            birth_date: ''
        }
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/api/v1/profile`)
        .then(res => {
            console.log(res);
            this.setState({user: res.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        // console.log(this.state);
        return(
            <div>
                <GroupList />
            </div>
            
        )
    }

}

export default Profile