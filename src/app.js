import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar'

import {routes, routeMap } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/scss/bootstrap.scss'
//import './index.scss'
import Store from './mobx/index'
import AuthStore from './mobx/AuthStore'
import { Provider } from 'mobx-react'
const store = new Store()

const App = () => <div>
                    <Provider store={store}>
                    <Router>
                       <React.Fragment>
                            <Navbar routes={routes}/> 
                            <div className="container" style={{padding:"10px"}}>
                                {routeMap}
                            </div>
                       </React.Fragment>
                   </Router>   
                   </Provider> 
                   </div>


ReactDOM.render(<App/>,document.getElementById("app"))