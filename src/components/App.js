import React , { Component } from 'react'

import GetDogs from './GetDogs'
import DogList from './DogList';



class App extends Component {
   
    render(){
      
        return(
            <div>
                <h2>Dog App!</h2>
                    <h1>{this.props.name}</h1>
                <GetDogs  />
            </div>
        )
    }
}
export default App