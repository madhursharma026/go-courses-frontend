import React, { Component , Fragment} from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import TopPage from './TopPage';
import Nginx from '../components/CoursesCard/Nginx';
import Docker from '../components/CoursesCard/Docker';
import Kubernetes from '../components/CoursesCard/Kubernetes';
import Jenkins from '../components/CoursesCard/Jenkins';
import Ansible from '../components/CoursesCard/Ansible';

export class DevOpsPage extends Component {
  render() {
    return (

        <Fragment>
        <TopNavigation/>
        <TopPage pagetitle="Welcome to DevOps path"/>
        <div className='divpathStyle'>
        <Nginx/>
        <Docker/>
        <Kubernetes/>
        <Jenkins/>
        <Ansible/>
        </div>
        <Footer/>
      
    </Fragment>
   )
 }
}
      
export default DevOpsPage