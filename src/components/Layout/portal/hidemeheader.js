import React from 'react'
import {MdRestaurant} from 'react-icons/md'
import {GiPig} from 'react-icons/gi'
import styled from 'styled-components'



const Header = () => {
    return(
<Headercontainer >

<h1><MdRestaurant className="red" /><GiPig className="red" />Bienvenu au Bistro et Charcurterie Gastronomique Le Chochon Gourmand. Ici le Porc est le Roi!<GiPig className="red" /><MdRestaurant className="red" /></h1>


</Headercontainer>

)


}

export default Header

const Headercontainer = styled.div`
color: white;
  padding:20px;
  background:purple;
  text-align:center;

  .red{
    color:red;
  }

      `
