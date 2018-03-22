import React, { Component } from 'react'
import { observer,inject } from "mobx-react";

@inject("store")
@observer
class Home extends Component {
    render() {
        //console.log(this.props.store.authStore)        
        return <div>
                    Home
                    <div>
                    {this.props.store.authStore.isLogin?"login":"notlogin"}
                    </div>
                    <button type="button" className="btn btn-primary">Primary</button>
                </div>
    }
}

export default Home