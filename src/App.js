// App.js
import React, { useRef } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Who from './components/Who/Who';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const heroRef = useRef(null);
  const worksRef = useRef(null);
  const whoRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="app">
      <Hero 
       
        worksRef={worksRef}
        whoRef={whoRef}
        contactRef={contactRef}
      />
      
      <section ref={worksRef}>
        <Works />
      </section>
      <section ref={whoRef}>
        <Who />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
