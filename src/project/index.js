import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import {store} from "./Store";
import registerServiceWorker from '.././registerServiceWorker';
import Login from "./container/login/login";
import Register from "./container/register/register";
import AuthRoute from './component/authroute/authroute'
import './config'

function Boss(){
    return null
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute/>
                <Boss path='/boss'/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
