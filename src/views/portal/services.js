import React from 'react'
import styled from 'styled-components'
import { ListGroup,ListGroupItem, Card } from 'react-bootstrap'

export default () => {

    return(
    <Services>
        
     <Card style={{ width: '40rem' }}>

  <ListGroup className="list-group-flush">
    <ListGroupItem><li> Reservation </li></ListGroupItem>
    <ListGroupItem><li> Livraison </li></ListGroupItem>
    <ListGroupItem><li> Plâts pour clients avec restrictions alimentaires </li></ListGroupItem>
  </ListGroup>

</Card>
</Services>
    )
    }

const Services = styled.div`
color: red;
  font-size: 20px;
  
  padding:20px;
  background:grey
  }

  `
