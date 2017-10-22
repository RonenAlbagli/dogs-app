import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getDog } from '../actions';

import DogList from './DogList';

class GetDogs extends Component {


    getData() {
        const url = 'http://www.recipepuppy.com/api/?i=$&q=$'
        
        fetch(url, {
            method: 'GET'
        })
        .then( response => response.json())
        .then( json => {
            console.log('resualt', json.results)
              this.props.getDog(json.results);
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