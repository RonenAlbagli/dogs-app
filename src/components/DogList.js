import React, { Component } from 'react';
import { connect } from 'react-redux';

import DogItem from './DogItem';

class DogList extends Component {
    render () {
        return(
            <div>
                <select>
                {
            this.props.dogs.map((dogs, index) => {
                return (
                    <DogItem key={index} dogs={dogs} />
                )    
        })
    }      
                </select>
         </div>
            )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps,null)(DogList);