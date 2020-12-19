import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import history from './config/history'
import Portal from './views/portal/index'

import Home from './views/portal'
import Bio from './views/portal/bio'
import Produits from './views/portal/produits'
import Services from './views/portal/services'
import Menu from './views/portal/menu'
import Contact from './views/portal/contact'

import Dash from './views/admin'
import Login from './views/login'

import LayoutAdmin from './components/Layout/dash';
import Layout from './components/Layout/portal';

import { isAuthenticated } from './config/auth';


//admin
import Landing from './views/admin/landing'
import ProductsAdmin from './views/admin/products'
import CategoriesAdmin from './views/admin/categories'

const AdminRoute = ({ ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to='/login' />
    }
    return <Route {...rest} />
}


const Routers = () => (
    <Router history={history}>
        <Switch>
        <Route component={Login} exact path='/login' />

        <Route path="/admin">
                <LayoutAdmin>
                <AdminRoute exact path='/'component={Dash}  />
                    <AdminRoute  exact path="/admin/" component={Landing} />
                    <AdminRoute  exact path="/admin/categories" component={CategoriesAdmin} />
                    <AdminRoute  exact path="/admin/products" component={ProductsAdmin} />
                </LayoutAdmin>
            </Route>

            <Route path="/">
                <Layout>
                    <Route basename="/" exact path="/" component={Portal} />
                    <Route exact path='/bio' component={Bio} />
                    <Route exact path='/produits' component={Produits} />
                    <Route exact path='/services' component={Services} />
                    <Route exact path='/menu' component={Menu} />
                    <Route exact path='/contact' component={Contact} />

                </Layout>
            </Route>

            
        </Switch>

    </Router>

)

export default Routers




