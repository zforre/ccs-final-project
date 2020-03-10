import React, {Component} from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class GroupList extends Component {
    constructor(props) {
        super(props);
            this.state = {
                groups: [],
                title: '',
                description: '',
                image: null,
                preview: null,
                is_public: true,
            }
    }

    componentDidMount() {
        axios.get("/api/v1/")
        .then(result => {
            this.setState({groups: result.data})
            console.log('success');
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return(
            <div>
                <h1>I am the List App</h1>
                <ul>
                    {this.props.groups.map(group => {
                        return <li className="card mt-5" key={group.id}>
                                <img src={group.image} className="card-img-top" alt="Uploaded Photo"></img>
                                <div className="card-body">
                                    <h2 className="card-title">{group.title}</h2>
                                    <p className="card-text">{group.description}</p>
                                </div>
                            </li>;
                        })}
                </ul>
            </div>
        )
    }
}

export default GroupList