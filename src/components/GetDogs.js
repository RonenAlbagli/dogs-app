import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getDog } from '../actions';

import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

import DogList from './DogList';

class GetDogs extends Component {
    getData() {
        const url = 'https://dog.ceo/api/breeds/list'
        
        fetch(url, {
            method: 'GET'
        })
        .then( response => response.json())
        .then( json => {
            console.log('resualt', json.message)
            this.props.getDog(json.message);
            console.log(this.props)
        })
    }
    render() {
       return(
            <div>
             <button class="btn btn-info" onClick={() => this.getData()}>Get all dogs beed names</button>
                <h2>Choose a dog from the list: </h2> 
                <DogList dog={this.props.dog} /> 
            </div>
        )
    }
}
export default connect(null, {getDog})(GetDogs);