
import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

const queryClient = new QueryClient();

export default function App() {
  const sectionRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState('about');
  const location = useLocation();
  
  useEffect(() => {
    if (!Array.isArray(sectionRefs.current)) {
      sectionRefs.current = [];
    }
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({top: 0});
  };

  const handleScroll = () => {
    sectionRefs.current.forEach((section) => {
      if (section) { // check null
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 3) {
          setCurrentSection(section.id);
        }
      }
    });
  };

  useEffect(() => {
    // put scroll on top once page is rendered
    handleScrollToTop();
    // add scroll event
    if(location.pathname !== '/projects'){
      window.addEventListener('scroll', handleScroll);
    }
  
    // remove event when go off the page
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="
          flex 
          lg:justify-between lg:gap-4 lg:flex-row lg:px-6
          md:px-12
          sm:px-6
          flex-col
          max-w-screen-xl mx-auto md:px-16
        "
      >
        
        <Header sectionRefs={sectionRefs} currentSection={currentSection} />
        {/* <Header sectionRefs={sectionRefs} currentSection={currentSection} /> */}
        <div className="lg:w-[calc(60%-1rem)] w-full">
          <Outlet context={{ sectionRefs }} />
          <Footer />
        </div>
      </div>
    </QueryClientProvider>
  );
}
