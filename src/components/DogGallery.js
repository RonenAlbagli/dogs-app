import React , { Component } from 'react';
import { connect } from 'react-redux';

import { getIMG,favDog } from '../actions';

import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class DogGallery extends Component {

    constructor(){
        super();

        this.state ={ 
            gallery: false
        }
    }

    render() {
        return(
            <div  >


        <h3 className='display-3'>{this.props.data}  gallery</h3>
            <div>
                {
                    <div>
                        {
                    this.props.IMG.map((getIMG => 
                       <div className='DivIMG'>
                      
                      
                                <img class="img-thumbnail" hr src={getIMG} href={getIMG} key={getIMG} />
                       </div>
                        )
                    )
                }
                    </div>
                }
            </div>


        
        </div>
    )
    }
}


function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {getIMG,favDog}) (DogGallery)
