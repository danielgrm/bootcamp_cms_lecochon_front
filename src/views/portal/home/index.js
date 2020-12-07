import React from 'react'
//import styled from 'styled-components'
//import Header from '../../../components/header'
//import Footer from '../../../components/footer'
//import Banner from '../../components/banner'
import Carousel from 'react-bootstrap/Carousel'
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return(
        <>


  <div className="tab-wrapper">
      <div className='container-fluid' >
        <div className="row" >
          <div className="col-sm-12" >
          

            <Tabs defaultActiveKey="accueil">
              <Tab eventKey="accueil" title="Accueil">
                <div className="tab-item-wrapper">
                <Carousel
                pause='false'
                interval='3000'
                >
  <Carousel.Item>
  <h3>La plus exquisite Charcuterie du region</h3>
    <img
      className="d-block w-100"
      src="https://dgrm-aws-bucket.s3-sa-east-1.amazonaws.com/imgs/charcute1.jpg"
      alt=""
    />

  </Carousel.Item>
  <Carousel.Item>
  <h3>Fromages exclusifs de la Province; produits d'origine controlé</h3>
    <img
      className="d-block w-100"
      src="https://dgrm-aws-bucket.s3-sa-east-1.amazonaws.com/imgs/fromages1.jpg"
      alt=""
    />

  </Carousel.Item>
  <Carousel.Item>
  <h3>...et encore plus!</h3>
    <img
      className="d-block w-100"
      src="https://dgrm-aws-bucket.s3-sa-east-1.amazonaws.com/imgs/charcute2.jpg"
      alt=""
    />

  </Carousel.Item>
</Carousel>
                </div>
              </Tab>

              <Tab eventKey="bio" title="Bio">
                <div className="tab-item-wrapper">
                  <h5>Bio</h5>
                  <p>L'Histoire du Chef Remi et du Bistro</p>
                  <div>
                  <p>Remy habite à Marseille et a un goût trés sophistiqué. Son rêve etait de devenir chef cuisinier et de profiter des différentes œuvres d'art culinaire. Le seul problème est qu'il est une souris. Lorsqu'il se retrouve dans l'un des meilleurs restaurants de Marseille, Rémy décide de transformer son rêve en réalité.</p>
                  </div>
                  <div>
                  <img width={400} height={500}src='https://dgrm-aws-bucket.s3-sa-east-1.amazonaws.com/imgs/Remy.jpg'alt=''/>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="menu" title="Menu">
                <div className="tab-item-wrapper">
                  <h5>Notre Menu</h5>
                  <p> Notres plâts tradicionels. Toutefois, Le Chef et toujours prêt a nous surprendre!</p>
                  <p> Notre specialité vegetarian: Ratatouille avec legùmes biots</p>
                  <img src='https://dgrm-aws-bucket.s3-sa-east-1.amazonaws.com/imgs/remi.jpg' alt=''/>
                </div>
              </Tab>
              <Tab eventKey="produits" title="Produits">
                <div className="tab-item-wrapper">
                  <h5>Produits</h5>
                  <p>Notres produits sont trés exquisites, exclusifs et d'origine controlé!</p>
                </div>
              </Tab>
              <Tab eventKey="services" title="Services">
                <div className="tab-item-wrapper">
                  <h5>Services</h5>
                  <p>Notres services e reservation </p>
                </div>
              </Tab>
              <Tab eventKey="contact" title="Contact">
                <div className="tab-item-wrapper">
                  <h5>Contact</h5>
                  <p> Contactez le etoilé Chef Remi!</p>
                </div>
              </Tab>
            </Tabs>

          </div>
        </div>
      </div>
    </div>



</>
)


}




export default Home

