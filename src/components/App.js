import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import GetDogs from './GetDogs'
import DogList from './DogList';
import '../styles/index.css';




class App extends Component {
    render(){
        return(
        <div className='container'>
            <h4><Link to='/favorites'>Favorite Gallery</Link></h4>
            <div>

                <h2 className="display-1">Dog App!</h2>
                    <h1>{this.props.name}</h1>
                <GetDogs  />
            </div>
        </div>
        )
    }
}
export default App