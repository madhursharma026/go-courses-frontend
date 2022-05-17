import React from "react";
import About from "./components/About/About";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import AboutPage from "./pages/AboutPage";
import ContactusPage from "./pages/ContactusPage";

import HomePage from './pages/HomePage';
import OurPathsPage from "./pages/OurPathsPage";
import TopPage from "./pages/TopPage";
import TheRouter from './Router/theRouter';

import Python from './components/CoursesCard/Python'
import HTMLpage from "./pages/HTMLpage";
import CSSpage from "./pages/CSSpage";
import JavaScriptpage from "./pages/JavaScriptpage";
import FrontEndpage from "./pages/FrontEndpage";
import PythonPage from "./pages/PythonPage";
import DjangoPage from "./pages/DjangoPage"
import LoginPage from "./pages/LoginPage"
import Signup from "./components/Signup/Signup";
import SignupPage from "./pages/SignupPage";
import OurPaths from "./components/OurPaths/OurPaths";
import BackEndPage from "./pages/BackEndPage";
import DevOpsPage from "./pages/DevOpsPage";



const App = () => {
  return (
    
    <div className="app" id="root">
     <TheRouter/>
     </div>
    
        // <div>
        //  <LoginForm/>
        // </div>
  );
};

export default App
