import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

import { selectDog } from '../actions';


import { createStore } from 'redux';
import rootReducer from '../reducers'
import DogGallery from './DogGallery'

class DogList extends Component {
    constructor(){
        super();
        this.state ={ 
            selected: false,
            p_dog : ""
        }
    }
    selectedDog(dogs){
        this.props.selectDog(dogs.target.value);
        this.setState({p_dog:dogs.target.value});
        console.log('p_dog:', this.state.p_dog);
        console.log('store', this.props.getState);
    }

    ShowGallery(){
        console.log(this.store.selectDog)
        this.setState({selected:true})
    }

    render () {
        return(
            <div>
                <select  onChange={this.selectedDog.bind(this)}  >
                {
           this.props.dogs.map((dogs => 
                    <option key={dogs} value={dogs}>
                    {dogs}
                    </option>)
                )    
        })
    }   
                </select>
                <Button onClick={() =>this.ShowGallery()}>Show Dogs Picture</Button>
                {
                                    this.state.selected ?
                                        <div>
                                          <DogGallery/>
                                       </div>
                                    :
                                    <div></div>
                }
         </div>
            )
    }
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps,{ selectDog})(DogList);