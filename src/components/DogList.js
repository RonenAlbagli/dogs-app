import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

import { selectDog ,getIMG } from '../actions';
import DogGallery from './DogGallery'

class DogList extends Component {
    constructor(){
        super();

        this.state ={ 
            selected: false,
            p_dog : "",
            IMG: []
        }
    }
  
    selectedDog(dogs){
        this.props.selectDog(dogs.target.value);
        this.setState({p_dog:dogs.target.value});
        this.DogList = dogs.target.value;
    }

    searchDogPic(){
        let breed =   this.DogList
        console.log('breed', { breed })
        const url = `https://dog.ceo/api/breed/${breed}/images`
        console.log('url   ' , url);

        fetch(url,{
            method: 'GET'
        })
        .then( response => response.json())
        .then( json => {
            console.log('Images', json.message);
            this.props.getIMG(json.message);
            this.setState({selected:true, IMG: json.message})
        });
    }

    render () {
        return(
            <div>
            <div className='DDL'>
                <select className='dropdown-backdrop' onChange={this.selectedDog.bind(this)}  >
                {
           this.props.dogs.map((dogs => 
                    <option className='options ' key={dogs} value={dogs}>
                        {dogs}
                    </option>)
                )    
        })
       
    }   
                </select>
            </div>
                <button className='btn btn-info' onClick={() =>this.searchDogPic()}>Show Dogs Picture</button>
                {
                                    this.state.selected ?
                                        <div>
                                          <DogGallery data={this.state.p_dog} IMG={this.state.IMG}/>
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
export default connect(mapStateToProps,{ selectDog, getIMG})(DogList);