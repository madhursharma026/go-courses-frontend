import React, { Component, Fragment } from 'react'
import '../../asset/css/Bootstrap.min.css'
import '../CoursesCard/CoursesCard.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import python from '../../asset/images/python.jpg'
import python2 from '../../asset/images/python2.jpeg'

export class Python extends Component {
  render() {
    return (
      <Fragment>
        <div className='divStyle'>
          <div className='container-md text-center'>
            <div className='row'>
              <div className='col-12 col-xl-5 flex-wrap borderCard py-3 mt-3 mb-3'>
                <Card>
                  <Card.Body className='flex-wrap CardBody'>
                    <Card.Img className='cardImg' variant="left" src={python} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>Python Foundation</Card.Title>
                        <Card.Text>
                          Explore and practice basic programming concepts using Python. You'll get a rapid and practical introduction to web development using python .
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
                    <Card.Img className='cardImg' variant="left" src={python2} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>Python basic tutorial</Card.Title>
                        <Card.Text>
                          In this complete Python course you will learn everything you need to get started with Python programming language. What do you wait ? start now
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

export default Python