import React , { Component } from 'react';
import { connect } from 'react-redux';

class DogItem extends Component {
    render(){
        let { dogs }= this.props;
        console.log('props', this.props)
        return(
              <option>
                   {dogs.title}
             </option>
        )
    }
}

export default connect()(DogItem);