import React from 'react'
import LayoutAdmin from '../../components/Layout/dash'
import { Route } from 'react-router-dom'

import Home from './landing'

import Produits from './products'

import Categories from './categories'


export default (props) => {

    return (
        <LayoutAdmin>
            <Route exact basename={props.match.path} path={props.match.path + '/'} component={Home} />
            
            <Route exact basename={props.match.path} path={props.match.path + '/products'} component={Produits} />

            <Route exact basename={props.match.path} path={props.match.path + '/categories'} component={Categories} />
        </LayoutAdmin>
    )
}