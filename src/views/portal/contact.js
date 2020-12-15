import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaTwitter, FaPhoneAlt } from 'react-icons/fa'
import { GoLocation, GoMail } from 'react-icons/go'
import { ListGroup,ListGroupItem, Card, CardDeck } from 'react-bootstrap'

export default () => {
  return (

    <Contact>
     <CardDeck>
     <Card >
          <Card.Header>Contactez le etoilé Chef Remi!</Card.Header>
  <ListGroup variant="top">
    <ListGroup.Item><FaPhoneAlt />(04) 91 45 15 75 </ListGroup.Item>
    <ListGroup.Item><GoMail />lecochon@gourmand.com.fr </ListGroup.Item>

  </ListGroup>
</Card>

<Card >
          <Card.Header>Suivez nous!</Card.Header>
  <ListGroup variant="top">
  <ListGroupItem><div className="title"></div><div className="icons"><FaInstagram />  @lecochongourmand</div></ListGroupItem>
            <ListGroupItem><div className="title"></div><div className="icons"><FaTwitter />  @lecochongourmand</div></ListGroupItem>
  </ListGroup>
</Card>
<Card >
          <Card.Header>Venez chez nous gôuter notres délices!</Card.Header>
  <ListGroup variant="top">
  <ListGroupItem><GoLocation />56 Boulevard Inexistant, 13007 Marseille, France</ListGroupItem>


  </ListGroup>
</Card>

</CardDeck>
 
</Contact>




    )
    }

const Contact = styled.div`

color: red;
  font-size: 20px;
  
  padding:20px;
  background:grey
  }

  `