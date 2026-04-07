'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PretextHeading from '@/components/PretextHeading';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // 1. Mandatory Entry Animations
    gsap.fromTo('.hero-text-item', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', stagger: 0.25 }
    );
    
    // 2. TRUE PARALLAX SYSTEM
    gsap.to(".hero-image", {
      y: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".hero-text-container", {
      y: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // 3. Background Depth Layer Movement
    gsap.to(".depth-layer", {
      y: 60,
      opacity: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // 4. Staggered Reveal Animation System
    const revealSections = document.querySelectorAll(".reveal-section");
    
    revealSections.forEach(section => {
      const items = section.querySelectorAll(".reveal-item");
      if (items.length > 0) {
        gsap.fromTo(items, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.15, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 95%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

  }, []);

  const staticProjects = [
    { 
      title: 'ANONYMOUS REPORTING PLATFORM', 
      desc: 'A secure, encrypted platform designed for whistleblower protection and institutional accountability.', 
      color: 'var(--beige)',
      image: '/anonymous-reporting.png'
    },
    { 
      title: 'UNDERRATED MYSORE', 
      desc: 'A curated exploration of local culture and hidden landmarks, highlighting the authentic spirit of the city.', 
      color: 'var(--sky-blue)',
      image: '/underrated-mysore.png'
    }
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section hero" ref={heroRef} style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', padding: '0 6vw', gap: '4rem', position: 'relative', overflow: 'hidden', maxWidth: '100%' }}>
        <div className="depth-layer" style={{ position: 'absolute', top: '-20%', left: '-10%', width: '120%', height: '140%', background: 'radial-gradient(circle at 10% 20%, rgba(200, 217, 230, 0.4) 0%, transparent 60%)', filter: 'blur(120px)', zIndex: -1 }}></div>

        <div className="hero-text-container" ref={textRef} style={{ flex: 1.2, zIndex: 10 }}>
           <div className="hero-text-item">
             <PretextHeading 
                text="H. JEEVAN"
                font="700 64px 'Playfair Display'"
                width={600}
                lineHeight={76}
                letterSpacing={1.2}
                className="navy-text"
                style={{ color: 'var(--navy)' }}
             />
             <span className="technical" style={{ display: 'block', marginTop: '0.8rem', color: 'var(--teal)', opacity: 0.6 }}>JXVZ01</span>
           </div>
           <div className="hero-text-item" style={{ marginTop: '2.5rem' }}>
             <h1 style={{ fontSize: '2.22rem', color: 'var(--navy)', fontWeight: 400, letterSpacing: '-0.01em', maxWidth: '550px', lineHeight: '1.3' }}>
               I design and build systems that solve real-world problems.
             </h1>
           </div>
           <p className="hero-text-item" style={{ maxWidth: '440px', fontSize: '1.1rem', marginTop: '1.5rem', color: '#567C8D', lineHeight: '1.6', opacity: 0.9 }}>
             Engineering student. Builder. Focused on turning ideas into working products.
           </p>
        </div>

        <div className="hero-image-container" style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', background: 'transparent' }}>
          <img 
            ref={imageRef}
            src="/jeevan_portrait.png" 
            alt="H. Jeevan" 
            className="hero-image shadow-soft"
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxWidth: '480px',
              objectFit: 'contain',
              borderRadius: '32px',
              filter: 'grayscale(0.1)',
              transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
              boxShadow: 'var(--shadow-layered)',
              zIndex: 10,
              willChange: 'transform'
            }} 
            onMouseOver={(e) => {
              e.currentTarget.style.filter = 'grayscale(0)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.filter = 'grayscale(0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>
      </section>

      {/* WHAT I WORK ON SECTION */}
      <section className="what-i-do reveal-section" style={{ padding: '15rem 6vw', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="reveal-item" style={{ marginBottom: '5rem' }}>
            <PretextHeading 
              text="What I Work On"
              font="700 32px 'Playfair Display'"
              width={400}
              lineHeight={40}
              className="navy-text"
              style={{ marginBottom: '0' }}
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', alignItems: 'stretch' }}>
            {[
              { title: 'Systems', desc: 'I build structured solutions that solve real-world problems.' },
              { title: 'Experiments', desc: 'I turn ideas into working prototypes through rapid iteration.' },
              { title: 'Thinking', desc: 'I focus on clarity, usability, and logical design.' }
            ].map((item, i) => (
              <div key={i} className="reveal-item work-on-card">
                <h4 className="technical" style={{ color: 'var(--teal)', marginBottom: '1.5rem', fontSize: '0.9rem', letterSpacing: '0.15em' }}>{item.title}</h4>
                <p style={{ fontSize: '1.2rem', color: 'var(--navy)', lineHeight: '1.6', fontWeight: 400 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="philosophy-section reveal-section" style={{ padding: '15rem 6vw', background: 'rgba(200, 217, 230, 0.25)', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }} className="reveal-item">
          <h3 style={{ fontSize: '4.5rem', fontWeight: 400, color: 'var(--navy)', lineHeight: '1.2' }}>
            “Clean thinking leads to clean systems.”
          </h3>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="reveal-section" style={{ background: 'var(--white)', padding: '15rem 6vw' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="reveal-item" style={{ marginBottom: '8rem' }}>
            <PretextHeading 
              text="SELECTED PROJECTS"
              font="700 45px 'Playfair Display'"
              width={600}
              lineHeight={60}
              className="navy-text"
              style={{ marginBottom: '0' }}
            />
          </div>
          
          <div className="work-grid" style={{ marginTop: '0' }}>
            {staticProjects.map((p, i) => (
              <div key={i} className="work-card reveal-item" style={{ padding: '0', border: 'none', background: 'transparent', boxShadow: 'none' }}>
                <div className="card-image-wrapper" style={{ 
                  borderRadius: '24px', position: 'relative', aspectRatio: '16/10', overflow: 'hidden', 
                  backgroundColor: p.color || 'var(--beige)', boxShadow: 'var(--shadow-layered)',
                  backgroundImage: p.image ? `url(${p.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.5s ease',
                }}>
                  {!p.image && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                      <span className="technical" style={{ opacity: 0.2 }}>PROJECT {i+1}</span>
                    </div>
                  )}
                </div>
                <div style={{ padding: '2rem 1rem' }}>
                  <h4 style={{ fontSize: '2rem', color: 'var(--navy)', fontWeight: 700 }}>{p.title}</h4>
                  <p style={{ color: '#567C8D', marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>{p.desc || 'No description available.'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT FOCUS SECTION */}
      <section id="explore" className="reveal-section" style={{ padding: '15rem 6vw', background: 'var(--sky-blue)', borderRadius: '40px 40px 0 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="reveal-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PretextHeading 
              text="Currently Exploring"
              font="700 35px 'Playfair Display'"
              width={500}
              lineHeight={45}
              className="navy-text"
              style={{ marginBottom: '1.2rem' }}
            />
            <p style={{ color: 'var(--navy)', fontSize: '1rem', opacity: 0.7, marginBottom: '4rem' }}>
              Areas I’m actively learning, building, and experimenting in.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              "AI Systems & Intelligence", "Applied AI Solutions", "System Design & Architecture",
              "Rapid Prototyping", "Privacy & Secure Systems", "Product Thinking & Design", 
              "Real-world Problem Solving"
            ].map((item, i) => (
              <span key={i} className="reveal-item explore-pill">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* MINI CTA & FOOTER */}
      <section style={{ padding: '10rem 6vw', textAlign: 'center', background: 'var(--beige)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', color: 'var(--navy)', marginBottom: '4rem' }}>
            If you're building something meaningful, I’d like to be part of it.
          </h3>
          <a href="/contact" className="link-teal" style={{ fontSize: '1.2rem', fontWeight: 700 }}>Get in touch</a>
        </div>
        
        <div style={{ marginTop: '10rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.5, paddingTop: '4rem', borderTop: '1px solid rgba(47, 65, 86, 0.1)' }}>
          <span className="technical">H. JEEVAN (JXVZ01) | {new Date().getFullYear()}</span>
          <span className="technical">BUILT TO LAST</span>
        </div>
      </section>
    </main>
  );
}
