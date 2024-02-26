import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/Experience/WorkExperience';
import ContactMe from './components/Contact/ContactMe';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='app-container'>
        <Hero />
        <Skills />
        <WorkExperience />
        <Project />
        <ContactMe />
      </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
