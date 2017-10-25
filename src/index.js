import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FavDog from './components/FavDog';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { BrowserRouter, Switch,Route } from 'react-router-dom';

const store =createStore(rootReducer);
store.subscribe(()=> console.log('store', store.getState()));
console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path ='/favorites' component={FavDog}/>
        </Switch>
        </BrowserRouter>
      
    </Provider>
    , document.getElementById('root')
)

