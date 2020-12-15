import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CardColumns, Card } from 'react-bootstrap'
import { getCategories, getProducts } from '../../services/admin'
import { MdFilter } from 'react-icons/md'

export default () => {
 //   const [categories, setCategories] = useState([])
    
 const [ativos, setativos] = useState([])
 
 const getprod = async () => {
  const  { data } = await getProducts()
  setativos(data.filter(element => {
          return element.status==true
  }))
}
getprod()


    return(
    <Produits>
      <Card>
      <Card.Header>Ramportez chez vous les produits serví par le Chef Remi!</Card.Header>
      </Card>

          
    
        <CardColumns>
  
        {ativos.map((element, i) => (<Card>
          <Card.Img variant="top" src={element.photo} />
          <Card.Body>
      <Card.Title>{element.title}</Card.Title>
      <Card.Text>
        {element.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">${element.price}</small>
    </Card.Footer>
  </Card>))}

  </CardColumns>
            </Produits>    
        )
    }


  
const Produits = styled.div`
color: red;
  font-size: 20px;
  font-size:20px;
  padding:20px;
  background:purple
  }

  `

