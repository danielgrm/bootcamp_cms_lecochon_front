import React, { useEffect, useState } from 'react'
import List from './products/list'
import ProdForm from './products/form'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

export default () => {

const [isCreate, setCreate] = useState(false)
const [update, setUpdate] = useState({})
const location = useLocation()
console.log(location)

const updateProduct = (obj) => {
    setUpdate(obj)
    setCreate(true)
}

useEffect(() => {
if (location.state?.update) {
    setCreate(false)
    }
}, [location])


return (
    <>
    <Button size="sm" onClick={() => setCreate(!isCreate)}>
            {isCreate ? "Lista" : "Novo"}
            </Button>
    <hr />

    <Products>
            {isCreate 
            ? <ProdForm update={update}  /> 
            : <List update = {updateProduct} />}
    </Products>
    </>
)
}

const Products = styled.div`
 
`



// import { getCategories, deleteCategory } from '../../services/admin'
// import { Button, Form, Table } from 'react-bootstrap'
// import styled from 'styled-components'
// import Swal from 'sweetalert2'


// import { getProducts } from '../../services/admin'

// export default () => {
//     const [categories, setCategories] = useState([])
//     const [isCreate, setCreate] = useState(true)
//     const [isUpdate, setUpdate] = useState(false)
//     const [formCategory, setFormCategory] = useState({})

    // const [products, setproducts] = useState([])

    // useEffect(() => {
    //     let get = async () => {
    //         const p = await getProducts()
    //         setproducts(p.data)
    //     }

    //     get();

    //     return () => get = () => { };
    // }, [])


    // const handleChange = (attr) => {
    //     setFormCategory({
    //         ...formCategory,
    //         [attr.target.name]: attr.target.value
    //     })
    // }
    // const List = () => (
    //     <>
    //         <Button size="sm" onClick={() => setCreate(true)}> Novo</Button>
    //         <hr />
    //         <Table striped hover>
    //             <thead>
    //                 <tr>
    //                     <THeadItem>Nome</THeadItem>
    //                     <THeadItem></THeadItem>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {products.map((item, i) => (
    //                     <tr key={i}>
    //                         <td>{item.title}</td>
    //                         <td>Editar | <ActionButton onClick={() => _deleteCategory(item)} variant="danger" size="sm">Excluir</ActionButton></td>
    //                     </tr>
    //                 ))}

    //             </tbody>
    //         </Table>
    //     </>
    // )

    // const Create = () => (
    //     <>
    //         <Button size="sm" variant="success" onClick={() => setCreate(false)}>Lista</Button>
    //         <hr />
    //         <Form.Group controlId="name">
    //             <Form.Control  onChange={handleChange} name="name" value={formCategory.name || ""} placeholder="Nome do Produto" />
    //         </Form.Group>
    //         <Form.Group controlId="icon">
    //             <Form.Control onChange={handleChange} name="icon" value={formCategory.icon || ""} placeholder="Url Icone" />
    //         </Form.Group>
    //         <Form.Group controlId="name">
    //             <Form.Control  onChange={handleChange} name="name" value={formCategory.name || ""} placeholder="Nome da Categoria" />
    //         </Form.Group>
    //         <Form.Group controlId="name">
    //             <Form.Control  onChange={handleChange} name="name" value={formCategory.name || ""} placeholder="Nome da Categoria" />
    //         </Form.Group>
    //         <Form.Group controlId="name">
    //             <Form.Control  onChange={handleChange} name="name" value={formCategory.name || ""} placeholder="Nome da Categoria" />
    //         </Form.Group>
    //         <Form.Group controlId="name">
    //             <Form.Control  onChange={handleChange} name="name" value={formCategory.name || ""} placeholder="Nome da Categoria" />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">
    //             Cadastrar
    //             </Button>

    //     </>
    // )


    // useEffect(() => {
    //     setUpdate(false)
    //     let get = async () => { const c = await getCategories(); setCategories(c.data); }
    //     if (!isUpdate) {
    //         get();
    //     }
    //     //clear
    //     return () => get = () => { };
    // }, [isUpdate])

    // const _deleteCategory = async (obj) => {
    //     const message = (type, message) => Swal.fire({
    //         position: 'top-end',
    //         icon: type || 'success',
    //         title: message || `Categoria excluída com sucesso.`,
    //         showConfirmButton: false,
    //         timer: 2500
    //     })

    //     Swal.fire({
    //         title: `Deseja exluir o usuário ${obj.name} `,
    //         showCancelButton: true,
    //         confirmButtonText: `Sim`,
    //         cancelButtonText: `Não`,
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             deleteCategory(obj._id)
    //                 .then(() => {
    //                     setUpdate(true)
    //                     message('success', `Categoria ${obj.name} excluída com sucesso.`)
    //                 })
    //                 .catch(() => message('danger', `Erro ao excluir a categoria`))
    //         }
    //     })
    // }


 


// const THeadItem = styled.th`
//     background: #666;
//     color:#eee;

//     :nth-child(1){  width: 80%; }
// `

// const ActionButton = styled(Button)`
//     padding:2px 4px;
//     font-weight:500;

//     :hover {
//         opacity:0.4
//     }
// `       
