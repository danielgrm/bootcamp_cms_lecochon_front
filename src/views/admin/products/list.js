import React, { useEffect, useState } from 'react'
import { getProducts, deleteProduct } from '../../../services/admin'
import { Button, Table } from 'react-bootstrap'
import styled from 'styled-components'
import Swal from 'sweetalert2'

const List = (props) => {
    const [products, setProducts] = useState([])

    const [isUpdate, setUpdate] = useState(false)



    useEffect(() => {
        setUpdate(false)
        let get = async () => { const obj = await getProducts(); setProducts(obj.data); }
        if (!isUpdate) {
            get();
        }
        return () => get = () => { };
    }, [isUpdate])

    const _deleteProduct = async (obj) => {
        const message = (type, message) => Swal.fire({
            position: 'top-end',
            icon: type || 'success',
            title: message || `Producto excluído.`,
            showConfirmButton: false,
            timer: 2500
        })

        Swal.fire({
            title: `Deseja excluir ${obj.title} `,
            showCancelButton: true,
            confirmButtonText: `Sim`,
            cancelButtonText: `Não`,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(obj._id)
                    .then(() => {
                        setUpdate(true)
                        message('success', `Produto ${obj.title} excluído.`)
                    })
                    .catch(() => message('danger', `Erro ao excluir`))
            }
        })
    }
    return (
        <>

            <Table striped hover>
                <thead>
                    <tr>
                        <THeadItem>Nome</THeadItem>
                        <THeadItem>Categoria</THeadItem>
                        <THeadItem></THeadItem>
                    </tr>
                </thead>
                <tbody>
                    {products.map((obj, i) => (
                        <tr key={i}>
                            <td>{obj.title}</td>
                            <td>{obj.category.name}</td>
                            <td> <ActionButton onClick={() => props.updateProduct(obj)} variant="warning" size="sm">Editar</ActionButton>
                            | 
                            <ActionButton onClick={() => _deleteProduct(obj)} variant="danger" size="sm">Excluir</ActionButton></td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </>
    )

}
   
export default List
const Products = styled.div`
 
`
const THeadItem = styled.th`
    background: #666;
    color:#eee;

    :nth-child(1){  width: 80%; }
`

const ActionButton = styled(Button)`
    padding:2px 4px;
    font-weight:500;

    :hover {
        opacity:0.4
    }
`       