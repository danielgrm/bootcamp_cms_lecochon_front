import React from 'react'
import styled from 'styled-components'
import { CardDeck, Card } from 'react-bootstrap'

export default () => {
    return(
    <Menu>
       <CardDeck>
  
 <Card>
    <Card.Img variant="top" src='https://dgrm-aws-bucket.s3-sa-east-1.amazonaws.com/imgs/remi.jpg' />
  
<Card.Footer>
<small className="text-muted">La specialité vegetarian: Ratatouille avec legùmes biots</small>
</Card.Footer>
</Card>

<Card>
       <Card.Body>
<Card.Title>Notre Menu</Card.Title>
<Card.Text>
Notres plâts sont tradicionels. 
Toutefois, Le Chef et toujours prêt a nous surprendre!

</Card.Text>
</Card.Body>
<Card.Footer>
<small className="text-muted">Notres plats sont tous creé par le Chef!</small>
</Card.Footer>
</Card>

</CardDeck>
          {/* <div className="tab-item-wrapper">
                  <h5>Notre Menu</h5>
                  <p> Notres plâts tradicionels. Toutefois, Le Chef et toujours prêt a nous surprendre!</p>
                  <p> Notre specialité vegetarian: Ratatouille avec legùmes biots</p>
                  <img src='https://dgrm-aws-bucket.s3-sa-east-1.amazonaws.com/imgs/remi.jpg' alt=''/>
                </div> */}
    </Menu>



    )
    }

const Menu = styled.div`
color: blue;
  font-size: 20px;
    padding:20px;
  background: white
  }

  `
