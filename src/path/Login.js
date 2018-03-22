import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router'

@inject('store')
@withRouter 
@observer
class Login extends Component {
    login = (e) => {
        e.preventDefault()
        let { store: { authStore } , history} = this.props
        //this.props.store.authStore.ToLogin()
        //console.log(authStore)
        authStore.SetLogin(true)
        history.push('/')
    }
    render() {
        return <div className="wrapper">
                    <div className="col-md-4">
                        <div className="panel panel-default">
                    <div className="panel-heading"><h3 className="panel-title"><strong>Sign In </strong></h3></div>
                    <div className="panel-body">
                    <form role="form" onSubmit={this.login}>
                    <div className="form-group">
                        <label>Username or Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Password <a href="/sessions/forgot_password">(forgot password)</a></label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-lg btn-block btn-primary">Sign in</button>
                    </form>
                    </div>
                    </div>
                    </div>
            </div>
    }
}

export default Login    