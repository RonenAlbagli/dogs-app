import React , { Component } from 'react';
import { connect } from 'react-redux';

import { getIMG } from '../actions';

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
        <h1>Gallery</h1>

        <h3>{this.props.data}</h3>
        <table>
            <tbody>
                <tr>
                {
                    this.props.IMG.map((getIMG => 
                       
                            <td>
                                <img src={getIMG}/>
                            </td>
                        )
                    )
                }
                
            </tr>
            </tbody>
        </table>

        
        </div>
    )
    }
}


function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {getIMG}) (DogGallery)
