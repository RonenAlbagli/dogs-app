import React , { Component } from 'react';
import { connect } from 'react-redux';

import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class DogGallery extends Component {
    render() {
        return(
            <div>
        <h1>Gallery</h1>

        <table>
            <tbody>
                <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                </tr>
            <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
            </tr>
            <tr>
                <td>1A</td>
                <td>2B</td>
                <td>3C</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
    }
}
export default (DogGallery)
