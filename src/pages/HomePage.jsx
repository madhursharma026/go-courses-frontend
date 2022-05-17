import React, { Component, Fragment } from 'react'
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavigation from  "../components/TopNavigation/TopNavigation";
import Footer from  "../components/Footer/Footer";
import OurPaths from  "../components/OurPaths/OurPaths";
import Features from  "../components/Features/Features";
import About from  "../components/About/About";
import { ArrowRight } from 'react-bootstrap-icons';




export class HomePage extends Component {
    
    componentDidMount() {
        window.scroll(0,0)
      }
    render() {
        return (
            <Fragment>
               
                <TopNavigation />
                <TopBanner />
                <OurPaths />
               
                {/* <Frontend/> */}
                <About />
                <Footer />
                

            </Fragment>
        )
    }
}

export default HomePage
