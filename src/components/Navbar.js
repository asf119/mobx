import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import { observer,inject } from "mobx-react";
import { withRouter } from 'react-router'

@inject("store")
@withRouter
@observer
export default class extends Component {
    nav = this.props.routes.map((route,index) => {
        return route.onMenu?<li className="nav-item" key={index}>
                <Link className="nav-link" to={route.path}>
                    {route.name}
                </Link>
                </li>:""
      
        
    })  
    
    Login = () => {
        //console.log(this.props.store)
        //this.props.store.authStore.ToLogin()
        //this.props.store.authStore.isLogin = true
        //console.log(this.props)
        let { store : {authStore},history} = this.props
        if (authStore.isLogin)
            authStore.SetLogin(false)
        else
            history.push('/login')
    }

    render() {
        let { store : {authStore}} = this.props
        return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="navbar-brand">
                    Project
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {this.nav}
                </ul>
                <button className="btn btn-primary" onClick={this.Login}>
                    {!authStore.isLogin?"Login":"Logout"}
                    </button>
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