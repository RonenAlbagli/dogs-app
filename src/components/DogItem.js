import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectDog } from '../actions';

class DogItem extends Component {

    render(){
        let { dogs }= this.props;
        return(
                
              <option value={dogs} >
                   {dogs}
                 
             </option>
             
           
           
        )
    }
}



export default connect()(DogItem);