import React, { Component } from 'react';
import { connect } from 'react-redux';
import DogList from './DogList';
import { Link } from 'react-router-dom';

class FavDog extends Component {

    render(){
        return(
            <div>
                   <h4><Link to='/'>Home</Link></h4> 
                <h1>Favorit Dogs:</h1>
       
            </div>
        )

    }
}

export default FavDog