
import React, { Component, Fragment } from 'react'
import { Container, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap'
import '../TopNavigation/TopNavigation.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router';
export class TopNavigation extends Component {

  constructor() {
    super();
    this.state = {
      navBarTitle: 'navTitle',
    }

  }
  Scroll = () => {
    if (window.scrollY > 100) {

      this.setState({ navBarTitle: 'NaveScroll' })

    } else {

      this.setState({ navBarTitle: 'navTitle' })
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.Scroll);
  }





  render() {
    return (
      <Fragment>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className='px-2'>
            <Navbar.Brand to="#home" className={this.state.navBarTitle}>Go Courses</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <NavLink to="/" className="active">Home</NavLink>
                <NavLink to="/AboutPage" className="active">About</NavLink>
                <NavLink to="/OurPathsPage" className="active">Paths</NavLink>
                <NavDropdown className='drobStyle' title="Courses" id="collasible-nav-dropdown" style={{marginLeft:"7px"}}>
                  <NavDropdown.Item>< NavLink to="/HTMLpage">HTml</NavLink> </NavDropdown.Item>
                  <NavDropdown.Item>< NavLink to="/CSSpage">CSS</NavLink> </NavDropdown.Item>
                  <NavDropdown.Item>< NavLink to="/JavaScriptpage">JavaScript</NavLink> </NavDropdown.Item>
                  <NavDropdown.Item>< NavLink to="/PythonPage">Python</NavLink> </NavDropdown.Item>
                  <NavDropdown.Item>< NavLink to="/DjangoPage">Django</NavLink> </NavDropdown.Item>
                  <NavDropdown.Item>< NavLink to="/NginxPage">Nginx</NavLink> </NavDropdown.Item>
                  <NavDropdown.Item>< NavLink to="/DockerPage">Docker</NavLink> </NavDropdown.Item>
                  <NavDropdown.Item>< NavLink to="/KubernetesPage">Kubernetes</NavLink> </NavDropdown.Item>
                  <NavDropdown.Item>< NavLink to="/JenKinsPage">JenKins</NavLink> </NavDropdown.Item>
                  <NavDropdown.Item>< NavLink to="/AnsiblePage">Ansible</NavLink> </NavDropdown.Item>
                </NavDropdown>
                <NavLink to="/ContactusPage" className="active">Contact</NavLink>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  </Form.Group>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    )
  }
}

export default TopNavigation
