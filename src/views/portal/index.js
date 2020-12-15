import React from 'react'
import Layout from '../../components/Layout/portal'
import { Route } from 'react-router-dom'

import Home from './home'
import Bio from './bio'
import Produits from './produits'
import Services from './services'
import Menu from './menu'
import Contact from './contact'


export default (props) => {

    return (
        <Layout>
            <Route exact basename={props.match.path} path={props.match.path + '/'} component={Home} />
            <Route exact basename={props.match.path} path={props.match.path + 'bio'} component={Bio} />
            <Route exact basename={props.match.path} path={props.match.path + 'produits'} component={Produits} />
            <Route exact basename={props.match.path} path={props.match.path + 'services'} component={Services} />
            <Route exact basename={props.match.path} path={props.match.path + 'menu'} component={Menu} />
            <Route exact basename={props.match.path} path={props.match.path + 'contact'} component={Contact} />
        </Layout>
    )
}