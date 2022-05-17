import React, { Component, Fragment } from 'react'
import HTML from '../components/CoursesCard/HTML'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import CSS from '../components/CoursesCard/CSS'
import JavaScript from '../components/CoursesCard/JavaScript'

export class JavaScriptpage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  render() {
    return (
     <Fragment>
         <TopNavigation/>
         <div className='divtopStyle'>
        <div className="text-center">
          
          <h1 className='pathMainTitle'> Ready to try JavaScript ? </h1>
          <p> Here you shall learn CSS foundation and be able to start design your first project. </p>
          <hr/>
          </div>
          </div>
         <JavaScript/>
         <Footer/>
       
     </Fragment>
    )
  }
}

export default JavaScriptpage
