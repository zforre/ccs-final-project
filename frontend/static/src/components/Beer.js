import React, {Component} from 'react';
import { Card, CardDeck, Container} from 'react-bootstrap'
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
            <Container>
                <div className="row w-100">
                    {this.state.beers.map(beer => 
                    <Card className="beers col-3" key={beer.beer_name}>
                        <Card.Img className="beers-img" variant="top" src={beer.beer_label} />
                        <Card.Body>
                            <Card.Title>{beer.beer_name}</Card.Title>
                            <Card.Text>{beer.brewery_name}</Card.Text>
                            <Card.Text>{beer.brewery_state}</Card.Text>
                        </Card.Body>
                    </Card>)}
                </div>
            </Container>
            
        )
    }

}

export default Beer