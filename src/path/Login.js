import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
export default class extends React {
    login = () => {
        this.props.store.authStore.ToLogin()
    }
    render() {
        return <div>
            <label>Login</label>
            <input type="type"/>
            <button className="btn btn-primary" onClick={this.login}>Login</button>
            </div>
    }
}