
import '../../asset/css/Bootstrap.min.css'
import '../CoursesCard/CoursesCard.css'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import {  Row , Col} from 'antd';
import Ht1 from '../../asset/images/html1.jpg'
import Ht2 from '../../asset/images/html2.jpg'
import { Link } from 'react-router-dom';

export class HTML extends Component {
  render() {
    return (
      <Fragment>
          <div className='divStyle'>
        <div className='container-md text-center'>
            <div className='row'>
              <div className='col-12 col-xl-5 flex-wrap borderCard py-3 mt-3 mb-3'>
                <Card>
                  <Card.Body className='flex-wrap CardBody'>
                    <Card.Img className='cardImg' variant="left" src={Ht1} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>HTML Foundation</Card.Title>
                        <Card.Text>
                          Learn HTML for a career in web development. This HTML tutorial teaches you everything you need to get started
                        </Card.Text>
                      </div>
                      <div className="flex-item">
                        <Link to="/detail/1"><Button variant="warning">Start learning </Button>  </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className='col-12 offset-xl-1 col-xl-5 flex-wrap borderCard py-3 mt-3 mb-3'>
                <Card>
                  <Card.Body className='flex-wrap CardBody'>
                    <Card.Img className='cardImg' variant="left" src={Ht2} style={{ marginRight: "10px" }} />
                    <div className="flex-container">
                      <div className="flex-item fill">
                        <Card.Title>HTML basic tutorial</Card.Title>
                        <Card.Text>
                          Learn the basics of HTML programming language and web development in this awesome course for beginners, click start to learn.
                        </Card.Text>
                      </div>
                      <div className="flex-item">
                        <Link to="/detail/2"><Button variant="warning">Start learning </Button>  </Link>
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

export default HTML
