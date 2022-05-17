import React, { Component, Fragment } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import OurPathsPage from '../pages/OurPathsPage';
import AboutPage from '../pages/AboutPage';
import ContactusPage from '../pages/ContactusPage';
import HTMLpage from '../pages/HTMLpage';
import FrontEndpage from '../pages/FrontEndpage';
import CSSpage from '../pages/CSSpage';
import JavaScriptpage from '../pages/JavaScriptpage';
import BackEndPage from '../pages/BackEndPage';
import PythonPage from '../pages/PythonPage';
import DjangoPage from '../pages/DjangoPage';
import LoginPage from '../pages/LoginPage';
import NginxPage from '../pages/NginxPage';
import DevOpsPage from '../pages/DevOpsPage';
import DockerPage from '../pages/DockerPage';
import KubernetesPage from '../pages/KubernetesPage';
import JenkinsPage from '../pages/JenkinsPage';
import AnsiblePage from '../pages/AnsiblePage';
import SignupPage from '../pages/SignupPage';
import CoursedetailsPage from '../pages/CoursedetailsPage';

export class theRouter extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/OurPathsPage" element={<OurPathsPage />} />
        <Route path="/ContactusPage" element={<ContactusPage />} />
        <Route path="/LoginPage" element={< LoginPage />} />
        <Route path="/SignupPage" element={< SignupPage />} />
        <Route path="/HTMLpage" element={<HTMLpage />} />
        <Route path="/CSSpage" element={<CSSpage />} />
        <Route path="/JavaScriptpage" element={<JavaScriptpage />} />
        <Route path="/FrontEndpage" element={<FrontEndpage />} />
        <Route path="/PythonPage" element={< PythonPage />} />
        <Route path="/DjangoPage" element={< DjangoPage />} />
        <Route path="/BackEndPage" element={<BackEndPage />} />
        <Route path="/NginxPage" element={< NginxPage />} />
        <Route path="/DockerPage" element={< DockerPage />} />
        <Route path="/KubernetesPage" element={< KubernetesPage />} />
        <Route path="/JenkinsPage" element={< JenkinsPage />} />
        <Route path="/AnsiblePage" element={< AnsiblePage />} />
        <Route path="/DevOpsPage" element={< DevOpsPage />} />
        <Route path="/detail/1" element={< CoursedetailsPage />} />
        <Route path="/detail/2" element={< CoursedetailsPage />} />
      </Routes>
    )
  }
}

export default theRouter
