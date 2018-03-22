import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import { observer,inject } from "mobx-react";
import { withRouter } from 'react-router'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

@inject("store")
@withRouter
@observer
export default class extends Component {
    nav = this.props.routes.map((route,index) => {
        return route.onMenu?<NavItem key={index}>
                <Link className="nav-link" to={route.path}>
                    {route.name}
                </Link>
                </NavItem>:""        
    })  

    constructor(props) {
        super(props)
        this.state = {
            isOpen:false
        }    
    }
    
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

    toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        let { store : {authStore}} = this.props
        return   <Navbar color="primary" dark expand="md">
                 <NavbarBrand href="/">
                    Project
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav  navbar>
                    {this.nav}
                </Nav>
                <Button color="primary"  onClick={this.Login}>
                    {!authStore.isLogin?"Login":"Logout"}
                </Button>
                
                </Collapse>
                </Navbar >        
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