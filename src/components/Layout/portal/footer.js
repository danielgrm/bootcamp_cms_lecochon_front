import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import{FaInstagram , FaTwitter, FaPhoneAlt} from 'react-icons/fa'
import{GoLocation, GoMail} from 'react-icons/go'

const Footer = () => {
    return(
<>
<Footercontainer>

    <Row>
    <Col> <div className="title">Suivez nous!</div><div className="icons"><FaInstagram/>   <FaTwitter/></div></Col>
    <Col>  <div className="title"><GoLocation/>56 Boulevard Inexistant, 13007 Marseille, France</div></Col>
    <Col> <div className="title">    <ul>
<li> <FaPhoneAlt/>(04) 91 45 15 75  </li>
<li> <GoMail/>lecochon@gourmand.com.fr </li>
</ul></div>
    </Col>
  </Row>
   <Row>
    <Col><div className="Divcopy"> TOUS DROITS RÉSERVÉS©</div></Col>
  </Row>
  

</Footercontainer>

</>

)


}

export default Footer

const Footercontainer = styled.div`
position:fixed;
bottom:0;
width :100%;
font-weight: 50;
height : 100px;
background: grey;
color: black;
text-align:center;

  .title{
    font-size:20px;
    font-weight: 400;
  }

  .Divcopy{
font-size: 12px;
font-weight: 800;
background: grey;
color: orange;
text-align:center;
  }

  .icons{
font-size:30px;
color:orange;
  }
.icons:hover{
color: black;

  }
`
