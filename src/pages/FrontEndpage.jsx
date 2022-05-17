
 import React, { Component, Fragment } from 'react'
import HTML from '../components/CoursesCard/HTML'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import CSS from '../components/CoursesCard/CSS'
import JavaScript from '../components/CoursesCard/JavaScript'
import TopPage from './TopPage';
export class FrontEndpage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  render() {
    return (
     <Fragment>
         <TopNavigation/>
         <TopPage pagetitle="Welcome to FrontEnd path"/>
         <div className='divpathStyle'>
         <HTML/>
         <CSS/>
         <JavaScript/>
         </div>
         
         <Footer/>
       
     </Fragment>
    )
  }
}

export default FrontEndpage

