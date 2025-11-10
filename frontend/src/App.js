import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-[#0a0a0a] min-h-screen">
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;