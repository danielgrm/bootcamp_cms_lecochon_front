import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import history from './config/history'
import  Portal  from './views/portal'
import  Dash  from './views/admin'
import  Login  from './views/login'
// import Bio from './views/portal/bio'

import LayoutAdmin from './components/Layout/dash';

import { isAuthenticated } from './config/auth';


//admin
import ProductsAdmin from './views/admin/products'
import CategoriesAdmin from './views/admin/categories'

const AdminRoute = ({ ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to='/login' />
    }
    return <Route {...rest} />
}


const Routers = () => (
    <Router history= {history}>
        <Switch>
            <Route component={Dash} path='/admin' />
            <Route component={Login} path='/login' />
            <Route component={Portal} path='/' />
            {/* <Route exact component={Bio} path='/bio' /> */}


        <Route path="/admin">
                <LayoutAdmin>
                    <AdminRoute basename="/admin" exact path="/admin" component={() => <p>Home</p>} />
                    <AdminRoute basename="/admin/categories" exact path="/admin/categories" component={CategoriesAdmin} />
                    <AdminRoute basename="/admin/products" exact path="/admin/products" component={ProductsAdmin} />
                </LayoutAdmin>
            </Route>
            </Switch>

    </Router>

)

export default Routers