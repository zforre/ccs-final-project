import React, {Component} from 'react';
import axios from "axios";
import {Card, CardDeck, Button, Dropdown, Row} from 'react-bootstrap'
import '../containers/App.css';
import untappd_logo from '../images/pbu_80_white.png'
import spotter_logo from '../images/spotterlogo.png'



axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const CLIENT_ID = process.env.REACT_APP_UNTAPPD_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_UNTAPPD_CLIENT_SECRET
const ACCESS_TOKEN = process.env.REACT_APP_UNTAPPD_ACCESS_TOKEN

const BASE_URL= process.env.REACT_APP_BASE_URL

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
      url: "",
      groups: [],
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.addBeer = this.addBeer.bind(this);
  }

  componentDidMount() {
    this.handleSearch()
    // add url to get request that returns user's groups
    axios.get(`${BASE_URL}/api/v1/`)
    .then(res => {
      console.log(res);
        this.setState({groups: res.data})
       // set the groups on state so you can use them to prompt the user for a group
    })
    .catch(error => {
      console.log(error);
    })
  }

  handleSearch() {
    const RANDOM_BEER = Math.floor(Math.random() * (2000 - 1 + 1)) + 1; //returns random number for beer some beers are broken
    axios.get(`https://api.untappd.com/v4/beer/info/${RANDOM_BEER}?access_token=${ACCESS_TOKEN}`)        
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

    
  addBeer(group) {
    console.log(group)
    const data = {
    beer_label: this.state.beer_label,
    beer_name: this.state.beer_name,
    beer_description: this.state.beer_description,
    beer_abv: this.state.beer_abv,
    beer_ibu: this.state.beer_ibu,
    brewery_name: this.state.brewery_name,
    brewery_city: this.state.brewery_city,
    brewery_state: this.state.brewery_state
    }
    axios.patch(`${BASE_URL}/api/v1/testing/${group}/`, data)
      .then(res => {
        console.log(res);
        //setState this beer content = beers
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    // console.log('props', this.props)
    return  (
      <div className="container">     
      <div className="row justify-content-center">
        <CardDeck  className="w-100 mt-5">
          <Card className="col col-md-6 spot-img-card">
            <Row>
            <Card.Img src={this.state.beer_label_hd || spotter_logo} className="col spot-img" />
            </Row>
          </Card>
          <Card className="col col-md-6 card-style">
            <Card.Body >
              <Card.Title> <h1>{this.state.beer_name}</h1></Card.Title>
              <Card.Text>{this.state.beer_style}</Card.Text>
              <Card.Text className="" >ABV: {this.state.beer_abv} IBU: {this.state.beer_ibu}</Card.Text>
              <Card.Text>{this.state.beer_description}</Card.Text>
              <Card.Link className="custom-link text-large" href={this.state.url}>{this.state.brewery_name}</Card.Link>
              <Card.Text >{this.state.brewery_city}, {this.state.brewery_state}</Card.Text>
              <div className='w-100'></div>
              
              <Dropdown>
              <Dropdown.Toggle  className='' id="dropdown-basic">
                Add to a Collection
              </Dropdown.Toggle>
              <Dropdown.Menu>
              {this.state.groups.map(group =>
                <Dropdown.Item key={group.id} onClick={() => this.addBeer(group.id)}>
                  {group.title}
                </Dropdown.Item>)}
              </Dropdown.Menu>
              </Dropdown>
              <div className='w-100'></div>
              <Button  onClick={this.handleSearch} className="mt-3" >New Beer</Button>
              <div className="mt-4 row justify-content-center"><img src={untappd_logo} className="logo col"/></div>
          </Card.Body>
        </Card>
        </CardDeck>
      </div>
    </div> 
    )
  }
}

export default Spotter;


//  after clicking add button display users groups in a modal and then fire the onClick={this.addBeer} method