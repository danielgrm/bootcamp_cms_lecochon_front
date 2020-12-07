import React from 'react'
//import styles from './css/sb-admin-2.css'
import { FaPiggyBank } from 'react-icons/fa'
import {removeToken} from '../../../config/auth'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import history from '../../../config/history'

const Header = () => {
    const logout = () => {
        removeToken()
        history.push ('/')
    }


    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">

                    
                    {/* Nav Item - User Information */}
                    <li className="nav-item dropdown no-arrow">

                        <div className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <DropdownButton id="dropdown-basic-button" title="Logged as Admin">
                            <Dropdown.Item href="#/action-1">toma um café</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">não faz nada</Dropdown.Item>
                            <Dropdown.Item onClick={logout}>logoff</Dropdown.Item>
                            </DropdownButton>
                        </div>

                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Header
