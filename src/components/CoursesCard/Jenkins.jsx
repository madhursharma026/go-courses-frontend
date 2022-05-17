import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import jenkins1 from '../../asset/images/jenkins1.webp'
import jenkins2 from '../../asset/images/jenkins2.png'

export class Jenkins extends Component {
  render() {
    return (
      <Fragment>
        <div className='divStyle'>
          <div className='container-md text-center'>
            <div className='row'>
              <div className='col-12 col-xl-5 flex-wrap borderCard py-3 mt-3 mb-3'>
                <Card>
                  <Card.Body className='flex-wrap CardBody'>
                    <Card.Img className='cardImg' variant="left" src={jenkins1} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>Jenkins Foundation</Card.Title>
                        <Card.Text>
                          The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.
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
                    <Card.Img className='cardImg' variant="left" src={jenkins2} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>Jenkins basic tutorial</Card.Title>
                        <Card.Text>
                          This Jenkins tutorial will help you understand what is Jenkins, what is continuous integration, features of Jenkins, Jenkins architecture.
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


export default Jenkins