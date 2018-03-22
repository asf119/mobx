import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import { observer,inject } from "mobx-react";

@inject("store")
@observer
export default class extends Component {
    
    nav = this.props.routes.map((route,index) => {
        return <li className="nav-item" key={index}>
                <Link className="nav-link" to={route.path}>
                    {route.name}
                </Link>
                </li>
    })  
    
    test = () => {
        console.log(this.props.store)
        //this.props.store.ToLogin(true)
        //this.props.store.authStore.isLogin = true
    }

    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="navbar-brand">
                    Project
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {this.nav}
                </ul>
                <button onClick={this.test}>click</button>
                </div>
                </nav>        
    }
}

// export default ({routes}) => {
//     const nav = routes.map((route,index) => {
//         return <li className="nav-item" key={index}>
//                 <Link className="nav-link" to={route.path}>
//                     {route.name}
//                 </Link>
//                 </li>
//     })
//     return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//             <div className="navbar-brand">
//                 Project
//             </div>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto">
//                 {nav}
//             </ul>
//             </div>
//             </nav>
// }