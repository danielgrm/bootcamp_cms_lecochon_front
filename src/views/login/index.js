import React from 'react'
import styled from'styled-components'

import {useState} from "react"

// import { Link } from 'react-router-dom';
import { Button, Form, Spinner } from 'react-bootstrap';
import { authentication } from '../../services/auth'
import http from '../../config/http';
import { saveToken } from '../../config/auth';
import history from '../../config/history'


export default () => {

const [form, setForm] = useState("")
const [loading, setLoading] = useState(false)

const handleChange = (attr) => {
  setForm({
      ...form,
      [attr.target.name]: attr.target.value
  })
}

const isSubmitValid = () => form.email && form.password


const submitLogin = async (e) => {
  e.preventDefault()
  if (isSubmitValid()) {
      setLoading(true)
      try {
        console.log(form)
          const { data } = await authentication(form)
          const { token } = data
          http.defaults.headers["x-auth-token"] = token;
          saveToken(token)
          history.push('/admin')

      } catch (error) {
          setLoading(false)
          console.log('deu ruim', error)
      }
  }
}





    return(
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content />
          <meta name="author" content />
          <title>SB Admin 2 - Login</title>
          {/* Custom fonts for this template*/}
          <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
          {/* Custom styles for this template*/}
          <link href="css/sb-admin-2.css" rel="stylesheet" />
          <div className="container">
            {/* Outer Row */}
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    {/* Nested Row within Card Body */}
                    <div className="row">
                      
                      <IMG>
                      <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                      </IMG>
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Login Page</h1>
                          </div>
                          <Form className="user">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control className="form-control form-control-user" onChange={handleChange} type="email" name="email" placeholder="Enter email" value={form.email || ""} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Control className="form-control form-control-user" onChange={handleChange} type="password" name="password" placeholder="Password" value={form.password || ""} />
                                            </Form.Group>

                                            <Button onClick={submitLogin} disabled={!isSubmitValid()} className={`btn ${isSubmitValid() ? 'btn-primary' : "btn-secondary"} btn-user btn-block`} variant="primary" type="submit">

                                                {loading ? (
                                                    <>
                                                        <Spinner
                                                            as="span"
                                                            animation="grow"
                                                            size="sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                        />
                                                        Carregando...
                                                    </>
                                                ) : "Login"}

                                            </Button>
                                        </Form></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      )
    }



const IMG = styled.div`
display: flex;
flex: 0 0 50%;
max-width: 50%;
background:url("https://dgrm-aws-bucket.s3-sa-east-1.amazonaws.com/imgs/capachogato.jpg");
background-position: center;
background-size: cover;
display: block !important;

  `