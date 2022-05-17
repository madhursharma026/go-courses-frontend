import React, { Component , Fragment} from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import TopPage from './TopPage';
import Python from '../components/CoursesCard/Python';
import Django from '../components/CoursesCard/Django';

export class BackEndPage extends Component {
  render() {
    return (
        <Fragment>
        <TopNavigation/>
        <TopPage pagetitle="Welcome to BackEnd path"/>
        <div className='divpathStyle'>
        <Python/>
        <Django/>
        </div>
        <Footer/>
      
    </Fragment>
   )
 }
}
      

export default BackEndPage