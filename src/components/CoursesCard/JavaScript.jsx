
import '../../asset/css/Bootstrap.min.css'
import '../CoursesCard/CoursesCard.css'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import {  Row , Col} from 'antd';
import JavaScript1 from '../../asset/images/JavaScript1.jpg'
import JavaScript2 from '../../asset/images/JavaScript2.jpg'

export class JavaScript extends Component {
  render() {
    return (
      <Fragment>
        <div className='divStyle'>
          <div className='container-md text-center'>
            <div className='row'>
              <div className='col-12 col-xl-5 flex-wrap borderCard py-3 mt-3 mb-3'>
                <Card>
                  <Card.Body className='flex-wrap CardBody'>
                    <Card.Img className='cardImg' variant="left" src={JavaScript1} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>JavaScript Foundation</Card.Title>
                        <Card.Text>
                          If you want to become a front-end developer, you have to learn JavaScript. this tutorial will teach you from scratch.
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
                    <Card.Img className='cardImg' variant="left" src={JavaScript2} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>JAvaScript basic tutorial</Card.Title>
                        <Card.Text>
                          Are you not sure where to start learning JavaScript , node.js or React.js and more? Go Courses is a good place to start.
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

export default JavaScript
