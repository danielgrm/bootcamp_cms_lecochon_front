import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import {MdRestaurant} from 'react-icons/md'
import {GiPig} from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'



export default (props) => {

    return(
<Header>
    

<Navbar bg="light">
<h1><MdRestaurant/><GiPig/><Navbar.Brand className="bienvenu" href="/">Bienvenu au Bistro Le Chochon Gourmand</Navbar.Brand><GiPig/><MdRestaurant/></h1>
<Navbar.Toggle aria-controls="basic-navbar-nav"/>
<Navbar.Collapse classname="justify-content-end" />
<Nav 
activeKey="/home"
onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
className="justify-content-end" variant="tabs"  defaultActiveKey="/">


            <NavLink exact={true} to=''>
                <Nav.Link as="div">{"Accueil"}</Nav.Link>
            </NavLink>
            <NavLink exact={true} to='bio'>
                <Nav.Link as="div">{"Bio"}</Nav.Link>
            </NavLink>
            <NavLink exact={true} to='menu'>
                <Nav.Link as="div">{"Menu"}</Nav.Link>
            </NavLink>
            <NavLink exact={true} to='produits'>
                <Nav.Link as="div">{"Produits"}</Nav.Link>
            </NavLink>
            <NavLink exact={true} to='services'>
                <Nav.Link as="div">{"Services"}</Nav.Link>
            </NavLink>
            <NavLink exact={true} to='contact'>
                <Nav.Link as="div">{"Contact"}</Nav.Link>
            </NavLink>
   </Nav>

</Navbar>
<div className="roi"><h2>Bistro et Charcurterie Gastronomique. Ici le Porc est le Roi! </h2></div>
</Header>

)


}


const Header = styled.div`
color: red;
  font-size: 20px;
  
  .bienvenu{
    font-size:25px;
    margin:10px;
    
      }
  .roi{
  font-size:20px;
  padding:20px;
  background:purple
  }

  `
