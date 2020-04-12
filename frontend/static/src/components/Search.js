import React, {Component} from 'react';
import axios from "axios";
import {Card, Button, Dropdown, Row} from 'react-bootstrap'
import '../containers/App.css';
import untappd_logo from '../images/pbu_80_white.png'
import spotter_logo from '../images/spotterlogo.png'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const ACCESS_TOKEN = 'process.env.REACT_APP_UNTAPPD_ACCESS_TOKEN'


class Search extends Component {

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
        selectedGroup: null,
        search: "",
        comments: "",
        results: []
      }
  
      this.handleSearch = this.handleSearch.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.addBeer = this.addBeer.bind(this);
    }

    componentDidMount() {
        const options = {
          headers: {
            'Authorization': `Token ${JSON.parse(localStorage.getItem('my-app-user')).key}`,
          }
        }
    
        // this.handleSearch()
        // add url to get request that returns user's groups
        axios.get(`/api/v1/`, options)
        .then(res => {
          console.log(res);
            this.setState({groups: res.data})
           // set the groups on state so you can use them to prompt the user for a group
        })
        .catch(error => {
          console.log(error);
        })
    }
    
    handleInput(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    
    handleSearch() {
        delete axios.defaults.headers.common["Authorization"];
        axios.get(`https://api.untappd.com/v4/search/beer?q=${this.state.search}&access_token=${ACCESS_TOKEN}&limit=1&sort=name`)
        .then(res => {
            console.log(res);
            this.setState({results: res.data.response.beers.items})
        })
        .catch(error => {
            console.log(error);
        })
    
    }
    
    
    addBeer(result) {
        // console.log(result)
        const data = {
        beer_label: result.beer.beer_label,
        beer_name: result.beer.beer_name,
        beer_description: result.beer.beer_description,
        beer_abv: result.beer.beer_abv,
        beer_ibu: result.beer.beer_ibu,
        brewery_name: result.brewery.brewery_name,
        brewery_city: result.brewery.location.brewery_city,
        brewery_state: result.brewery.location.brewery_state
        }
        axios.patch(`/api/v1/testing/${this.state.groupId}/`, data)
          .then(res => {
            console.log(res);
            //setState this beer content = beers
          })
          .catch(error => {
            console.log(error);
          })
    }
    
    render() {
        // console.log('props', this.state.results);
    
        const results = this.state.results.map(result => (
          <div key={result.beer.bid}>
            <div>{result.beer.beer_name}</div>
            <div>{result.beer.beer_description}</div>
            <button type='button' onClick={() => this.addBeer(result)}>Add to collection</button>
          </div>
        ))
        return  (
          <div className="container">
          <div className="row justify-content-center">
            <CardDeck  className="w-100 mt-5">
              <Card className="col col-md-6 card-style">
                <Card.Body >
                    <Dropdown>
                        <Dropdown.Toggle  className='' id="dropdown-basic">
                        {this.state.selectedGroup || 'Select Collection'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.state.groups.map(group =>
                        <Dropdown.Item key={group.id} onClick={() => this.setState({selectedGroup: group.title, groupId: group.id})}>
                        {group.title}
                        </Dropdown.Item>)}
                    </Dropdown.Menu>
                    </Dropdown>
                    <div className='w-100'></div>
                    <Form inline>
                        <FormControl type="text" name='search' value={this.state.search} onChange={this.handleInput} placeholder="Search by name" className="mr-sm-2" />
                        <Button className="btn-primary" onClick={this.handleSearch}>Search</Button>
                    </Form>
                    {results}
                    <div className="mt-4 row justify-content-center"><img src={untappd_logo} className="logo col" alt="#"/></div>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </div>
        )
    }
    // {/* <Form inline>
    //     <FormControl type="text" name='search' value={this.state.search} onChange={this.handleInput} placeholder="Search by name" className="mr-sm-2" />
    //     <Button className="btn-primary" onClick={this.handleSearch}>Search</Button>
    // </Form> */}
}

export default Spotter;