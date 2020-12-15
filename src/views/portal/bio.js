import React from 'react'
import styled from 'styled-components'
import { CardDeck, Card } from 'react-bootstrap'

export default () => {

    return(
        
    <Bio>
    <CardDeck>
  
  <Card>
  <Card.Header>Notre Histoire</Card.Header>
  <Card.Body>
 <Card.Text>
 Remy habite à Marseille et a un goût trés sophistiqué. Son rêve etait de devenir chef cuisinier et de profiter des différentes œuvres d'art culinaire. Le seul problème est qu'il est une souris. Lorsqu'il se retrouve dans l'un des meilleurs restaurants de Marseille, Rémy décide de transformer son rêve en réalité. 
 </Card.Text>
 </Card.Body>
 <Card.Footer>
 <small className="text-muted">En Mijoutant Depuis 1998</small>
 </Card.Footer>
 </Card>
 
 <Card>
 <Card.Img variant="top" src='https://dgrm-aws-bucket.s3-sa-east-1.amazonaws.com/imgs/Remy.jpg' />

        <Card.Body>
        </Card.Body>

 <Card.Footer>
 <small className="text-muted">Remy, le Chef!</small>
 </Card.Footer>
 </Card>
 
 </CardDeck>
 </Bio>
) 
    }

const Bio = styled.div`
color: red;
  font-size: 20px;
  font-size:20px;
  padding:20px;
  background:purple
  }

  `
  