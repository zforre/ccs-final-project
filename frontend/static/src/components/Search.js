import React, {Component} from 'react';
import axios from "axios";
import {Card, Form, FormControl, Button, Dropdown, Row} from 'react-bootstrap'
import '../containers/App.css';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const ACCESS_TOKEN = '9111D16E0DDD0556DA855C5F69D92377FB6EA5DB'

const BASE_URL= process.env.REACT_APP_BASE_URL


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
        axios.get(`${BASE_URL}/api/v1/`, options)
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
        axios.get(`https://api.untappd.com/v4/search/beer?q=${this.state.search}&access_token=${ACCESS_TOKEN}&limit=5&sort=name`)
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
        axios.patch(`${BASE_URL}/api/v1/testing/${this.state.groupId}/`, data)
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
          <div className="col-4 mt-3" key={result.beer.bid}>
            <img className="mb-3" height="100" width="100" alt="label" src={result.beer.beer_label}/>
            <h4>{result.beer.beer_name}</h4>
            <h5>{result.brewery.brewery_name}</h5>
            <h5>{result.brewery.location.brewery_city}, {result.brewery.location.brewery_state}</h5>
            <div className="mb-3">{result.beer.beer_description}</div>
            <Button className="mb-5" type='button' onClick={() => this.addBeer(result)}>Add to collection</Button>
          </div>
        ))
        return  (
          <div className="container">
          <div className="row justify-content-center">
            
              <Card className="col mt-5 card-style">
                <Card.Body >
                    <div className='w-100'></div>
                    <Row>
                    <Form inline className="col">
                        <FormControl type="text" name='search' value={this.state.search} onChange={this.handleInput} placeholder="Search by name" className="mr-sm-2" />
                        <Button className="btn-primary" onClick={this.handleSearch}>Search</Button>
                    </Form>
                    <Dropdown className=" col">
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
                    </Row>
                    <Row>
                    {results}
                    </Row>
                </Card.Body>
              </Card>
            
          </div>
        </div>
        )
    }
    // {/* <Form inline>
    //     <FormControl type="text" name='search' value={this.state.search} onChange={this.handleInput} placeholder="Search by name" className="mr-sm-2" />
    //     <Button className="btn-primary" onClick={this.handleSearch}>Search</Button>
    // </Form> */}
}

export default Search;