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
            bid: '',
            beer_name: '',
            beer_description: '',
            beer_label: null,
            beer_abv: "",
            beer_ibu: "",
            beer_style: "",
            brewery_name: "",
            brewery_city: "",
            brewery_state: "",
        }
    }

    componentDidMount() {
        // console.log(props)
        // const {id} = this.props.ma
        
        axios.get(`${BASE_URL}/api/v1/${this.props.group}/`)
        .then(res => {
            console.log(res.data.beers);
            this.setState({beers: res.data.beers})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        console.log(this.state.beers);
        return(
            <div>
            {this.state.beers.map(beer => 
                <Figure key={beer.beer_name} className="mt-3 mr-3 beeritem">
                    <Figure.Image width={120} height={120} alt="beer" src={beer.beer_label}/>
                    <Figure.Caption className="text-white">
                        {beer.beer_name}
                    </Figure.Caption>
                </Figure>)}
            </div>
            
        )
    }

}

export default Beer