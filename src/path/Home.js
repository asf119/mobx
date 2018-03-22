import React, { Component } from 'react'
import { observer,inject } from "mobx-react";
import { withRouter } from 'react-router'

@inject("store")
@observer
class Home extends Component {
    render() {
        return <div>
                    Home
                    <button type="button" className="btn btn-primary">Primary</button>
                </div>
    }
}

export default Home