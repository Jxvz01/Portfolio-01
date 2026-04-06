'use client';

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Elegant reveal after 100px scroll
    gsap.fromTo(".navbar-main", 
      { y: -30, autoAlpha: 0 }, 
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "body",
          start: "top -100px",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <header className="navbar-main" style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      padding: '1.25rem 6vw', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      zIndex: 1010,
      background: 'transparent',
      opacity: 0,
      visibility: 'hidden'
    }}>
      <div className="navbar-logo-group" style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--navy)', letterSpacing: '0.05em' }}>H. JEEVAN</span>
        <span style={{ fontSize: '0.7rem', opacity: 0.5, fontWeight: 400, marginTop: '2px', color: 'var(--navy)' }}>JXVZ01</span>
      </div>
      <nav className="navbar-nav" style={{ display: 'flex', gap: '3.5rem' }}>
        <a href="/">HOME</a>
        <a href="/work">WORK</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a>
      </nav>
    </header>
  );
}
