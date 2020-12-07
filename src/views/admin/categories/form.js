import React, { useEffect, useState } from 'react'
import { getCategories, deleteCategory, createCategory, updateCategory } from '../../../services/admin'
import { Button, Form } from 'react-bootstrap'
import styled from 'styled-components'
import Swal from 'sweetalert2'

const CategForm = (props) => {

    
    const [formCategory, setFormCategory] = useState({...props.treconovo})

    const check = (data) => Object.keys(props.treconovo).length >0 
    ? updateCategory (props.treconovo._id, data)
    : createCategory (data)
    
    const check2 = Object.keys(props.treconovo).length >0 
    

    const handleChange = (attr) => {
        setFormCategory({
            ...formCategory,
            [attr.target.name]: attr.target.value
        })
    }


    const submete = async () => {
        const message = (type, message) => Swal.fire({
            position: 'top-end',
            icon: type || 'success',
            title: message || `Categoria excluída.`,
            showConfirmButton: false,
            timer: 2500
        })

        try {
            await check(formCategory)
            message('success', `Categoria Cadastrada.`)
            if (!check2) {
                setFormCategory({})
            }
        } catch (error) {
            message('error', `Deu Ruim.`)
        }

    }



return (
        <>
            
             <Form.Group >
                <Form.Control type="text" onChange={handleChange} name="name" value={formCategory.name || ""} placeholder="Nome da Categoria" />
            </Form.Group>
            <Form.Group >
                <Form.Control Type="text" onChange={handleChange} name="icon" value={formCategory.icon || ""} placeholder="Url Icone" />
            </Form.Group>
 
            <Button variant="primary" onClick={submete} >
                Enviar
                </Button>
         
        </>
    )

    }
    export default  CategForm