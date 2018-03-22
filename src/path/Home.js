import React, { Component } from 'react'
import { observer,inject } from "mobx-react";

@inject("store")
@observer
class Home extends Component {
    render() {
        //console.log(this.props.store.authStore)
        console.log('render')
        return <div>
                    Home
                    <button type="button" className="btn btn-primary">Primary</button>
                </div>
    }
}

export default Home