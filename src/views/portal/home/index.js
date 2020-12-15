import React, { useEffect, useState } from 'react'
//import styled from 'styled-components'
//import Header from '../../../components/header'
//import Footer from '../../../components/footer'
//import Banner from '../../components/banner'
import Carousel from 'react-bootstrap/Carousel'
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProducts } from '../../../services/admin';



const Home = () => {



  const [destaques, setDestaques] = useState([])



  // useEffect(async () => {

  let get = async () => {

    const { data } = await getProducts();
    setDestaques(data.filter(element => {
      return element.highlight
    }));
  }

  get();

  // }, []);



  return (
    <>


      <div className="tab-wrapper">
        <div className='container-fluid' >
          <div className="row" >
            <div className="col-sm-12" >



                  <div className="tab-item-wrapper">
                    <Carousel
                      pause='false'
                      interval='3000'
                    >

                      {destaques.map((element, i) => (<Carousel.Item>
                        <h3>La plus exquisite Charcuterie du region; Fromages exclusifs; Produits d'origine controlé</h3>
                        <img
                          className="d-block w-100"
                          src={element.photo}
                          alt="" />
                      </Carousel.Item>))}

    {/* <Carousel.Item>
  <h3>La plus exquisite Charcuterie du region</h3>
    <img
      className="d-block w-100"
      src="https://dgrm-aws-bucket.s3-sa-east-1.amazonaws.com/imgs/charcute1.jpg"
      alt=""
    />

  </Carousel.Item>*/}
                    </Carousel>
                  </div>
  

            </div>
          </div>
        </div>
      </div>



    </>
  )


}




export default Home

