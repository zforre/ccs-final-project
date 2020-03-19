import React, {Component} from 'react';
import axios from "axios";
import {Card, CardDeck, Button} from 'react-bootstrap'
import '../containers/App.css';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

// const BASE_URL = process.env.REACT_APP_BASE_URL

class Spotter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beer_name: "",
      beer_label_hd: "",
      beer_abv: "",
      beer_ibu: "",
      beer_style: "",
      beer_description: "",
      brewery_name: "",
      brewery_city: "",
      brewery_state: ""
    }

    
  }

  componentDidMount() {
    axios.get()
    .then(res => {
        console.log(res);
        this.setState(res.data.response.beer)
    })
    .catch(error => {
        console.log(error);
    })
}
  

  

  render() {
    // console.log('props', this.props)
    return  (
        
            <div className="row justify-content-center">
                <CardDeck  className="w-50 mt-5">
                    <Card className="bg-dark text-white">
                        
                        <Card.Img src={this.state.beer_label_hd} variant="top" className="" />
                        <Card.Body >
                        <Card.Title> <h1>{this.state.beer_name}</h1></Card.Title>
                        <Card.Text>
                            <p>ABV: {this.state.beer_abv} IBU: {this.state.beer_ibu}</p>
                            <p>{this.state.beer_style}</p>
                            <p>{this.state.beer_description}</p>
                        </Card.Text>
                        <Card.Link href="#" className="alert-link">Add to Your Collection</Card.Link>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        
    )
  }
}

export default Spotter;