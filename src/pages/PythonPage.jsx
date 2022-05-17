import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import Python from '../components/CoursesCard/Python'
import '../components/CoursesCard/CoursesCard.css'
import { Container } from 'react-bootstrap'

export class PythonPage extends Component {
componentDidMount() {
    window.scroll(0,0)
  }
  render() {
    return (
     <Fragment>
         <TopNavigation/>
         <div className='divtopStyle'>
         <div className="text-center" > 
         <h1 className='pathMainTitle'> Level up your Python skills  </h1>
         <p> Gain your Python development skills you need by start watching the courses below !</p>
         <hr/>
         </div>
         </div>
         <Python/>
        
         <Footer/>
       
     </Fragment>
    )
  }
}

export default PythonPage