import React, { useEffect, useState } from 'react'
import { createProduct, getCategories, updateProduct } from '../../../services/admin'
import { Button, Form } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import styled from 'styled-components'
import Swal from 'sweetalert2'

const ProdForm = (props) => {


    const [formProduct, setformProduct] = useState({
        status: true,
        highlight: false, 
        ...props.update,
           category: props.update?.category?._id || undefined
    })


//    const [isUpdate, setIsUpdate] = useState(false)
    const [categories, setCategories] = useState([])
    const [progress, setProgress] = useState(0)
    const [updatePhoto, setUpdatePhoto] = useState(false)

    const decidemetodo = (data) => isUpdate? updateProduct(props.update._id, data) : createProduct (data)
    const isUpdate = Object.keys(props.update).length > 0 

    const handleChange = (attr) => {
        const { value, name, checked } = attr.target
        const isCheck = name === 'status' || name === 'highlight'

        if (name === 'photo') {
            setformProduct({
                ...formProduct,
                'photo': attr.target.files[0]
            })
        } else {

            setformProduct({
                ...formProduct,
                [name]: isCheck ? checked : value
            })
        }
        return;
    }

    const submete = async () => {
        const message = (type, message) => Swal.fire({
            position: 'top-end',
            icon: type || 'success',
            title: message,
            showConfirmButton: false,
            timer: 2500
        })
        // conversao dos dados paa formData
        let data = new FormData()

        Object.keys(formProduct)
            .forEach(key => data.append(key, formProduct[key]))
            // if (typeof formProduct.photo === "string"){
            //     data.delete('photo')
            // }
        const config = {
            onUploadProgress: function (progressEvent) {
               let successPercent = Math.round(progressEvent.loaded * 100 / progressEvent.total)
               console.log(progressEvent)
               setProgress(successPercent)
            },
            headers: {
                'Content-type': 'multipart/form-data'
            }
          
        }
    

        console.log(formProduct)
        decidemetodo(data, config)
            .then((res) => {
                                clearForm()
                message('success', `Produto Cadastrado`)
            })
            .catch((err) => message('error', `Deu Merda.`))

        // habilitar depois para limpar o form apos o submit
        // por enquanto nao

        // setFormProduct({
        //     status: true,
        //     highlight: false
        // })

        const clearForm = () => {
            setUpdatePhoto(true)
            setformProduct({
                category: "",
                status: true,
                highlight: false,
                photo: ""
            })
        }

    }
    const isNotValid = () => {
        return Object.keys(formProduct).some(k => typeof formProduct[k] === "string" && formProduct[k] === "")
    }

    const removePhoto = () => {
        setUpdatePhoto(true)
        setformProduct({
            ...formProduct,
            photo: ""
        })
    }

    const handlePrice = (event, value, maskedValue) => {
        event.preventDefault();
        setformProduct({
            ...formProduct,
            "price": value
        })
    };

    const handlePriceDiscount = (attr) => {
        const value = attr.target.value;
        attr.preventDefault();
        console.log("value", value)
        const percent = (formProduct.price - value) / formProduct.price * 100;
        const percentAllow = percent >= 100 ? 100 : percent
        setformProduct({
            ...formProduct,
            discount_price: value,
            discount_price_percent: percentAllow
        })
    };

    const handlePercentDiscount = (attr) => {
        const desc = attr.target.value;

        const valorDesconto = Math.round(formProduct.price * (desc / 100))
        setformProduct({
            ...formProduct,
            discount_price: formProduct.price - valorDesconto,
            discount_price_percent: desc >= 0 && desc <= 100 ? desc : 0
        })

    };

    useEffect(() => {
        let get = async () => { const c = await getCategories(); setCategories(c.data); }
        get();
        //clear
        return () => get = () => { };
    }, [])

    return (
        <>

            <Form.Group controlId="title">
                <Form.Control onChange={handleChange} name="title" value={formProduct.title || ""} placeholder="Nome do Produto" />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Control onChange={handleChange} name="description" value={formProduct.description || ""} placeholder="Descrição" />
            </Form.Group>
            <Form.Group controlId="price">
                <Form.Control onChange={handleChange} name="price" value={formProduct.price || ""} placeholder="Preço Normal" />
            </Form.Group>
            <Form.Group controlId="discount_price">
                <Form.Control onChange={handlePriceDiscount} name="discount_price" disabled={!formProduct.price} value={formProduct.discount_price || ""} placeholder="Preço Promo" />
            </Form.Group>
            <Form.Group controlId="discount_price_percent">
                <Form.Control onChange={handlePercentDiscount} name="discount_price_percent" disabled={!formProduct.price} value={formProduct.discount_price_percent || ""} placeholder="Desc. Percentual" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Categoria</Form.Label>
                <Form.Control as="select" name="category" onChange={handleChange} value={formProduct.category || <option>Tem que escolher</option>}>

                    {categories.map((it, i) => (
                        <option key={i} value={it._id}>{it.name}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Form.Group >
                {isUpdate && !updatePhoto ? (
                    <Picture>
                        <img src={formProduct.photo} alt="photo" />
                        <span onClick={removePhoto}>Remover</span>
                    </Picture>
                ) : (
                        <input name="photo" type="file" onChange={handleChange} />
                    )}
            </Form.Group>

            {/* <Form.Group>
                <Form.File id="exampleFormControlFile1" name="photo" type="file" label="Foto do produto" onChange={handleChange} />
            </Form.Group> */}
            <hr />
            {progress > 0 ? <ProgressBar animated variant="info" now={progress} /> : ""}

            <hr />

            <Form.Check
                type="switch"
                id="highlight"
                label="Mostra no banner da home?"
                onChange={handleChange}
                value={formProduct.highlight}
                name="highlight"
                checked={Boolean(formProduct.highlight)}

            />

            <Form.Check
                type="switch"
                id="status"
                label="Tá ativo?"
                onChange={handleChange}
                value={formProduct.status}
                name="status"
                checked={Boolean(formProduct.status)}
            />


            <br />

            <Button variant="primary" disabled={isNotValid()} type="submit" onClick={submete}>
                {isUpdate ? "Atualizar" : "Cadastrar"}
            </Button>

        </>
    )

}
export default ProdForm
const Picpreview = styled.div`

    display: flex;
    flex-direction: column;

    img{
        max-width: 200px;
        max-height: 200px;
    }
    `

const Picture = styled.div`

    display: flex;
    flex-direction: column;

    img{
        max-width: 200px;
        max-height: 200px;
    }

    span{
        cursor: pointer;
        color: #ccc;
        &:hover{
            color: red
        }
    }


`

