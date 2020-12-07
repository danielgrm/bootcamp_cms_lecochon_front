import React, { useEffect, useState } from 'react'
import { getCategories, deleteCategory } from '../../../services/admin'
import { Button, Table } from 'react-bootstrap'
import styled from 'styled-components'
import Swal from 'sweetalert2'
const List = (props) => {
    const [categories, setCategories] = useState([])

    const [isUpdate, setUpdate] = useState(false)



    useEffect(() => {
        setUpdate(false)
        let get = async () => { const c = await getCategories(); setCategories(c.data); }
        if (!isUpdate) {
            get();
        }
        //clear
        return () => get = () => { };
    }, [isUpdate])

    const _deleteCategory = async (obj) => {
        const message = (type, message) => Swal.fire({
            position: 'top-end',
            icon: type || 'success',
            title: message || `Categoria excluída com sucesso.`,
            showConfirmButton: false,
            timer: 2500
        })

        Swal.fire({
            title: `Deseja excluir ${obj.name} `,
            showCancelButton: true,
            confirmButtonText: `Sim`,
            cancelButtonText: `Não`,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCategory(obj._id)
                    .then(() => {
                        setUpdate(true)
                        message('success', `Categoria ${obj.name} excluída com sucesso.`)
                    })
                    .catch(() => message('danger', `Erro ao excluir a categoria`))
            }
        })
    }
    return (
        <>

            <Table striped hover>
                <thead>
                    <tr>
                        <THeadItem>Nome</THeadItem>
                        <THeadItem></THeadItem>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((catg, i) => (
                        <tr key={i}>
                            <td>{catg.name}</td>
                            <td> <ActionButton onClick={() => props.updateCategory(catg)} variant="warning" size="sm">Editar</ActionButton>
                            | 
                            <ActionButton onClick={() => _deleteCategory(catg)} variant="danger" size="sm">Excluir</ActionButton></td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </>
    )

}
   
export default List
const Categories = styled.div`
 
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