import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

import DogItem from './DogItem';

import { selectDog } from '../actions';

// import { createStore } from 'redux';
// import rootReducer from '../reducers'



class DogList extends Component {

    constructor() {
        super();

        this.state = {
            
                    p_dog: "test"
                }

            
    }
    


    selectedDog(dogs){
        this.props.selectDog(dogs);
        console.log('props',this.state);
        this.setState({p_dog : dogs});
        console.log('done   ' + dogs);
        console.log(this.state.p_dog);
        
    }

    render () {
        return(
            <div>
                <select onChange={() => this.selectedDog("need to be here a dog")} >
                {
            this.props.dogs.map((dogs, index) => {
                return (
                    <DogItem  key={index} dogs={dogs}  />
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

export default connect(mapStateToProps,{ selectDog})(DogList);