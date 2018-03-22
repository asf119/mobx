import React from 'react'
import { Route } from "react-router-dom";
import Home from './path/Home'
import Login from './path/Login'

export const routes = [
    {
        name:"home",
        path:"/",
        exact:true,
        component:Home,
        onMenu:true
    },
    {
        name:"Login",
        path:'/login',
        component:Login,
        onMenu:false
    }
]

export const routeMap = routes.map((route,index) => {
    return <Route 
                name={route.name}
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
})

export default { routes, routeMap }