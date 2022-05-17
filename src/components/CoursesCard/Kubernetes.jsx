import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Kubernetes1 from '../../asset/images/Kubernetes1.png'
import kubernetes2 from '../../asset/images/kubernetes2.png'

export class Kubernetes extends Component {
  render() {
    return (
      <Fragment>
        <div className='divStyle'>
          <div className='container-md text-center'>
            <div className='row'>
              <div className='col-12 col-xl-5 flex-wrap borderCard py-3 mt-3 mb-3'>
                <Card>
                  <Card.Body className='flex-wrap CardBody'>
                    <Card.Img className='cardImg' variant="left" src={Kubernetes1} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>Kubernetes Foundation</Card.Title>
                        <Card.Text>
                          Want to learn Kubernetes? Get an in-depth primer on this powerful system for managing containerized applications.
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
                    <Card.Img className='cardImg' variant="left" src={kubernetes2} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>Kubernetes basic tutorial</Card.Title>
                        <Card.Text>
                          This tutorial provides a walkthrough of the basics of the Kubernetes cluster orchestration system. Each module contains some background information on Kubernetes features and concepts.
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


export default Kubernetes