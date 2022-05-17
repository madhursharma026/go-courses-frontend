import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import '../../asset/css/Bootstrap.min.css'
import "../About/About.css"
import tamkeenlogo from '../../asset/images/tamkeenlogo.jpg'
import pic from '../../asset/images/abouut.jpg'


export class About extends Component {

  render() {

    return (
      <Fragment>
        <Container className='px-3'>
          <div className='Platform-desc fluid' style={{ marginBottom: "10rem" }}>
            <Row>
              <Col sm={12} lg={12} md={12}>
                <h2 className="p-3" className="text-center text-uppercase" style={{ fontSize: "1.4em" }}>About <span> Go Courses</span> ? </h2>
                <Container fluid={true} className='Aboutus' />
                <div className='fs-4 mb-15 pt-15  fst-italic text-center' >
                  Go Courses Is a platform that help Tamkeen new devolpers finding all the learning materials in one place rather than looking into more places.</div>
              </Col>
            </Row>
          </div>
        </Container>


        &nbsp;

        <Container>
          <Row>
            <div className='row px-5'>
              <div className='col-12 col-lg-6 text-center'> <img className="aboutImage" src={pic} /> </div>
              <div className='col-12 col-lg-6 mt-4'>
                <div className="moti">
                  <h2 className="text-center text-uppercase ">Why <span> Go Courses</span> ?</h2>
                  <h4>Easy and fun</h4>
                  <p className="text-muted" className='fs-4 mb-20 pt-20  fst-italic'>Provides education content in a simple, fun and high quality.</p>
                  <h4>Diverse education conten</h4>
                  <p className="text-muted" className='fs-4 mb-20 pt-20  fst-italic'>provides the most important topics in web dovelopment.</p>
                  <h4>Learn the latest technologies</h4>
                  <p className="text-muted" className='fs-4 mb-20 pt-20  fst-italic'>New content for the latest technologies required in your work.</p>
                </div>
              </div>
            </div>



            {/* Motivation */}

            <div style={{ paddingLeft: "35px", paddingRight: "35px" }}>
              <h2 className="text-center text-uppercase question"> What was our motivation to bulid Go Courses ?</h2>
              <div className="aboutmoti" />
              <Container className="px-5 my-5">
                <Row className="gx-5 justify-content-center"> <hr />
                  <Col className="lg-10 col-xl-7">
                    <div className='text-center'>
                      <div className='fs-4 mb-20 pt-20  fst-italic' >
                        "Working with Tamkeen giva us the chance to improve our skills and achieving our dreams, Tamkeen makes us<span> ON THE NEXT! "</span>
                        <div className='d-flex align-items-center justify-content-center'>
                          {/* <Image className="rounded-circle me-3" src={tamkeenlogo} /> */}
                          <div className="fw-bold">
                            Amal,Gadah and Monerah
                            <span className="fw-bold text-dark mx-1">/</span>
                            Developers , Product Engineering.
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <hr />
              </Container>
            </div>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default About
