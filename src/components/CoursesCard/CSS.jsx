
import '../../asset/css/Bootstrap.min.css'
import '../CoursesCard/CoursesCard.css'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import {  Row , Col} from 'antd';
import css1 from '../../asset/images/css1.jpg'
import css2 from '../../asset/images/css2.jpeg'

export class CSS extends Component {
  render() {
    return (
      <Fragment>
        <div className='divStyle'>
          <div className='container-md text-center'>
            <div className='row'>
              <div className='col-12 col-xl-5 flex-wrap borderCard py-3 mt-3 mb-3'>
                <Card>
                  <Card.Body className='flex-wrap CardBody'>
                    <Card.Img className='cardImg' variant="left" src={css1} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>CSS Foundation</Card.Title>
                        <Card.Text>
                          In this tutorial, you`ll learn CSS from the ground up. such as coloring text,form ,link and more to highly advanced your skills.
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
                    <Card.Img className='cardImg' variant="left" src={css2} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>CSS basic tutorial</Card.Title>
                        <Card.Text>
                          CSS is used to control the style of a web document in a simple and easy way, you want to learn more ? click here
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

export default CSS
