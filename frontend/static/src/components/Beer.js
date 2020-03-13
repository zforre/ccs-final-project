import React, {Component} from 'react';
import {Figure} from 'react-bootstrap'
import '../containers/App.css';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const BASE_URL = process.env.REACT_APP_BASE_URL

class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            name: '',
            description: '',
            image: null
        }
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/api/v1/beer`)
        .then(res => {
            console.log(res);
            this.setState({beers: res.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        // console.log(this.state);
        return(
            <div className="row justify-content-center">
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={this.state.image}
                    />
                    <Figure.Caption>
                        {this.state.name}
                    </Figure.Caption>
                </Figure>
            </div>
            
        )
    }

}

export default Beer