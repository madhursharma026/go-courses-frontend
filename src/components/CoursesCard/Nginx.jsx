import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import nginx1 from '../../asset/images/nginx1.png'
import nginx2 from '../../asset/images/nginx2.jpg'


export class Nginx extends Component {
  render() {
    return (
      <Fragment>
        <div className='divStyle'>
          <div className='container-md text-center'>
            <div className='row'>
              <div className='col-12 col-xl-5 flex-wrap borderCard py-3 mt-3 mb-3'>
                <Card>
                  <Card.Body className='flex-wrap CardBody'>
                    <Card.Img className='cardImg' variant="left" src={nginx1} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>Nginx Foundation</Card.Title>
                        <Card.Text>
                          Learn how NGINX is used a web server, reverse proxy, load balancer, and HTTP cache to handle the demands of high traffic sites.
                        </Card.Text>
                      </div>
                      <div className="flex-item">
                        <Button variant="warning">Start learning </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className='col-12 offset-xl-1 col-xl-5 flex-wrap borderCard py-3 mt-3 mb-3'>
                <Card>
                  <Card.Body className='flex-wrap CardBody'>
                    <Card.Img className='cardImg' variant="left" src={nginx2} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>Nginx basic tutorial</Card.Title>
                        <Card.Text>
                          NGINX started to be known as an open-source web server. we are here to make it simple and understandable, start learning now.
                        </Card.Text>
                      </div>
                      <div className="flex-item">
                        <Button variant="warning">Start learning</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}


export default Nginx