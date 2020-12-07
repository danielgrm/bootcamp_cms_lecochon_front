import React, { useEffect, useState } from 'react'
//import { getCategories, deleteCategory } from '../../services/admin'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import List from './categories/list'
import CategForm from './categories/form'



const Category = () => {


    const [isCreate, setCreate] = useState(false)
    const [treconovo, setTreconovo] = useState({})
    
    const updateCategory = (catg) => {
    setCreate(true)
    setTreconovo(catg)
    console.log(catg)
    
    }



    return (
        <>
        <Button size="sm" onClick={() => setCreate(!isCreate)}>
                {isCreate ? "Lista" : "Novo"}
                </Button>
        <hr />
        <Categories>
            {isCreate ? <CategForm treconovo={treconovo}/> : <List updateCategory={updateCategory}/>}
        </Categories>
        </>
    )
}

export default Category

const Categories = styled.div`
 
`


const ActionButton = styled(Button)`
    padding:2px 4px;
    font-weight:500;

    hover {
        opacity:0.4
    }
`       