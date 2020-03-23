import React, {Component} from 'react';
import axios from "axios";
import {Card, CardDeck, Button} from 'react-bootstrap'
import '../containers/App.css';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const CLIENT_ID = process.env.REACT_APP_UNTAPPD_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_UNTAPPD_CLIENT_SECRET

function randomNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}  

const RANDOM_BEER = randomNumber(1, 2000);

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
    
  }


  componentDidMount() {
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

    // questionaire possibly a modal
    // if there is no image show something else
    // function to filter based off of reaction

  
    render() {
    // console.log('props', this.props)
        return  (
            
                <div className="row justify-content-center">
                    <CardDeck  className="w-75 mt-5">
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
                                <Card.Link href="#" className="alert-link text-success">Add to Your Collection</Card.Link>
                                <div className='w-100'></div>
                                <Button className='mt-3' onClick={this.handleClick} >New Beer</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
        
        )
    }
}

export default Spotter;