import React, {Component} from 'react';
import axios from "axios";
import {Card, CardDeck, Button} from 'react-bootstrap'
import '../containers/App.css';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const CLIENT_ID = process.env.REACT_APP_UNTAPPD_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_UNTAPPD_CLIENT_SECRET

// function randomNumber(min, max) {  
//     min = Math.ceil(min); 
//     max = Math.floor(max); 
//     return Math.floor(Math.random() * (max - min + 1)) + min; 
// }  

// const RANDOM_BEER = randomNumber(1, 2000);

class Spotter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beer_name: "",
      beer_label: "",
      beer_label_hd: "",
      beer_abv: "",
      beer_ibu: "",
      beer_style: "",
      beer_description: "",
      brewery_name: "",
      brewery_city: "",
      brewery_state: "",
      url: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
      this.handleSearch()
  }

  handleSearch() {
    const RANDOM_BEER = Math.floor(Math.random() * (2000 - 1 + 1)) + 1;
    axios.get(`https://api.untappd.com/v4/beer/info/${RANDOM_BEER}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    .then(res => {
        console.log(res);
        this.setState(res.data.response.beer);
        this.setState(res.data.response.beer.brewery);
        this.setState(res.data.response.beer.brewery.contact);
        this.setState(res.data.response.beer.brewery.location);
    })

    .catch(error => {
        console.log(error);
    })
    }

    handleClick() {
        window.location.reload();
    }

    // addBeer() {
    //     axios.post(`${BASE_URL}/api/v1/`)
    // }
    

  
    render() {
    // console.log('props', this.props)
        return  (
            
                <div className="row justify-content-center">
                    <CardDeck  className="w-50 mt-5">
                        <Card className="bg-dark text-white">
                            
                            <Card.Img src={this.state.beer_label_hd || this.state.beer_label} variant="top" className="" />
                            <Card.Body >
                                <Card.Title> <h1>{this.state.beer_name}</h1></Card.Title>
                                <Card.Text>{this.state.beer_style}</Card.Text>
                                <Card.Text className="text-muted" >ABV: {this.state.beer_abv} IBU: {this.state.beer_ibu}</Card.Text>
                                <Card.Text>{this.state.beer_description}</Card.Text>
                                <Card.Link href={this.state.url}>{this.state.brewery_name}</Card.Link>
                                <Card.Text >{this.state.brewery_city}, {this.state.brewery_state}</Card.Text>
                                <div className='w-100'></div>
                                <Button href="#" className="" onClick={this.addBeer}>Add to Your Collection</Button>
                                <div className='w-100'></div>
                                <Button className='mt-3' onClick={this.handleSearch} >New Beer</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
        
        )
    }
}

export default Spotter;