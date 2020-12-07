import React from 'react'
import { Link } from 'react-router-dom'
//import ItemMenu from './itemMenu'
import ListGroup from 'react-bootstrap/ListGroup'

const Sidebar = () => {

    return (
        <>




        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >

            <Link to={'/admin'} className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html" >
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Dashboard do Admin</div>
            </Link >

            < hr className="sidebar-divider " />


    <ListGroup  >
    <ListGroup.Item  action variant="secondary" href="/admin">
    Mãe, tô no Dashboard!
    </ListGroup.Item>
    <ListGroup.Item  action variant="primary" href="/">
    Home
    </ListGroup.Item>
    <ListGroup.Item  action variant="primary" href="/admin/categories">
    Categorias
    </ListGroup.Item>
    <ListGroup.Item  action variant="primary"  href="/admin/products" >
    Produtos
    </ListGroup.Item>
    </ListGroup>


        </ul >
        </>
    )
}

export default Sidebar


