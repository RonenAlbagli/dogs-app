import React , { Component } from 'react'

import GetDogs from './GetDogs'
import DogList from './DogList';

class App extends Component {
    render(){
        return(
            <div>
                <h2>Dog App!</h2>

                <GetDogs/>
               
              
            </div>
        )
    }
}

export default App