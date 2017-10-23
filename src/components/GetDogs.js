import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getDog } from '../actions';

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
            <div  >
             <button onClick={() => this.getData()}></button>
                <h1>Choose a dog from the list: </h1> 
                <DogList/> 
            </div>
        )
    }

}

export default connect(null, {getDog})(GetDogs);