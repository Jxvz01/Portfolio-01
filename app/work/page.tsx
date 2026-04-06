'use client';

import React, { useState, useEffect } from 'react';
import PretextHeading from '@/components/PretextHeading';

interface Project {
  title: string;
  tag: string;
  desc: string;
  description?: string; // Add optional description for sheet data
  year: string;
  overview: string;
  features: string[];
  stack: string[];
  github: string;
  live: string;
  color?: string;
  image?: string;
}

const projects: Project[] = [
  { 
    title: 'ANONYMOUS REPORTING PLATFORM', 
    tag: 'SYSTEMS DESIGN', 
    desc: 'A secure, encrypted platform designed for whistleblower protection and institutional accountability with zero-knowledge architecture.',
    year: '2025',
    overview: 'This project focuses on the intersection of security and usability. I built a zero-knowledge architecture where safety and accessibility are perfectly balanced, allowing users to report incidents without any risk of metadata leaks.',
    features: ['End-to-end encryption for all reports', 'Anonymity-first authentication systems', 'Encrypted reporting pipelines with metadata stripping'],
    stack: ['Next.js', 'Supabase', 'GSAP', 'React'],
    github: 'https://github.com/Jxvz01/Gabbar.git',
    live: 'https://gabbar-reports.vercel.app',
    color: 'var(--beige)',
    image: '/anonymous-reporting.png'
  },
  { 
    title: 'UNDERRATED MYSORE', 
    tag: 'PRODUCT DESIGN', 
    desc: 'A curated exploration of local culture and hidden landmarks, built to highlight the authentic spirit of the city and its community.',
    year: '2024',
    overview: 'Designed to bridge the gap between tourism and authentic local experience, this platform highlights hidden gems that are often overlooked by standard travel guides.',
    features: ['Cultural landmarks tracking system', 'Curated community insights database', 'Responsive interactive map integration'],
    stack: ['React', 'Framer Motion', 'Leaflet', 'Node.js'],
    github: 'https://github.com/Jxvz01/underrated-mysore.git',
    live: 'https://jxvz01.github.io/underrated-mysore/',
    color: 'var(--sky-blue)',
    image: '/underrated-mysore.png'
  },
  { 
    title: 'COMING SOON...', 
    tag: 'FUTURE SYSTEMS', 
    desc: 'Currently researching and architecting the next era of value-driven products.',
    year: '2026',
    overview: 'Strategic exploration into the next evolution of AI and product architecture. More details will be revealed upon prototype completion.',
    features: ['Deep architecture research', 'Stealth mode development', 'Market-driven prototyping'],
    stack: ['TBD'],
    github: '#',
    live: '#',
    color: '#f0f0f0'
  }
];

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    // Translate vertical wheel to horizontal scroll
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { e.key === 'Escape' && setSelected(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <main>
      <section style={{ marginTop: '4rem', padding: '10rem 6vw' }}>
        <PretextHeading 
          text="SELECTED WORKS"
          font="700 85px 'Playfair Display'"
          width={800}
          lineHeight={100}
          className="navy-text"
          style={{ marginTop: '1.5rem', color: 'var(--navy)' }}
        />
        <p style={{ maxWidth: '600px', marginTop: '2.5rem', fontSize: '1.4rem', color: '#567C8D' }}>
          I focus on systems that solve friction points—from secure anonymous platforms to curated cultural explorations.
        </p>

        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="work-carousel hide-scrollbar" 
          style={{ 
            marginTop: '8rem', 
            display: 'flex', 
            gap: '4rem', 
            overflowX: 'auto', 
            scrollBehavior: 'smooth',
            cursor: isDragging ? 'grabbing' : 'grab',
            paddingBottom: '2rem',
            userSelect: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="work-card shadow-soft" 
              onClick={() => !isDragging && setSelected(p)}
              style={{ 
                cursor: 'pointer', 
                flex: '0 0 500px',
                transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease',
              }}
            >
              <div 
                className="card-image"
                style={{ 
                  background: p.color || 'var(--beige)', 
                  backgroundImage: p.image ? `url(${p.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%', 
                  aspectRatio: '16/10', 
                  borderRadius: '12px', 
                  marginBottom: '2rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  transition: 'transform 0.5s ease',
                  overflow: 'hidden'
                }}
              >
                {!p.image && <span className="technical" style={{ opacity: 0.3 }}>PROJECT {i+1}</span>}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="technical" style={{ color: 'var(--teal)' }}>{p.tag || 'SYSTEMS'}</span>
                <span className="technical" style={{ opacity: 0.5 }}>{p.year || '2025'}</span>
              </div>
              <h4 style={{ fontSize: '1.8rem', marginTop: '1rem', color: 'var(--navy)', letterSpacing: '-0.02em' }}>{p.title}</h4>
              <p style={{ color: '#567C8D', marginTop: '1.5rem', fontSize: '1rem', lineHeight: '1.6' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL OVERLAY */}
      {selected && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelected(null)}
          style={{ 
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(47, 65, 86, 0.4)', backdropFilter: 'blur(10px)',
            zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', animation: 'fadeIn 0.4s ease-out forwards'
          }}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              background: 'var(--white)', borderRadius: '24px', width: '100%', maxWidth: '850px',
              maxHeight: '90vh', overflowY: 'auto', padding: '3.5rem', position: 'relative',
              boxShadow: '0 30px 100px rgba(47, 65, 86, 0.15)',
              transformOrigin: 'center center', animation: 'scaleIn 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards'
            }}
          >
            {/* CLOSE BUTTON */}
            <button 
              onClick={() => setSelected(null)}
              style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', cursor: 'pointer', opacity: 0.5, fontSize: '1.5rem' }}
            >
              ×
            </button>

            <div style={{ marginBottom: '3rem' }}>
              <span className="technical" style={{ color: 'var(--teal)', fontSize: '0.8rem' }}>{selected.tag} / {selected.year}</span>
              <h2 style={{ fontSize: '3rem', color: 'var(--navy)', marginTop: '0.5rem' }}>{selected.title}</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}>
              <div>
                <h5 className="technical" style={{ color: 'var(--navy)', marginBottom: '1rem', opacity: 0.8 }}>OVERVIEW</h5>
                <p style={{ fontSize: '1.15rem', color: 'var(--navy)', opacity: 0.8, lineHeight: '1.8' }}>{selected.overview}</p>

                <h5 className="technical" style={{ color: 'var(--navy)', margin: '3rem 0 1.5rem' }}>KEY FEATURES</h5>
                <ul style={{ paddingLeft: '1rem', color: 'var(--teal)', fontSize: '1.05rem', lineHeight: '2' }}>
                  {selected.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>

              <div>
                <h5 className="technical" style={{ color: 'var(--navy)', marginBottom: '1.5rem' }}>TECH STACK</h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {selected.stack.map((s, i) => (
                    <span key={i} style={{ padding: '0.4rem 1rem', background: 'var(--beige)', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)' }}>{s}</span>
                  ))}
                </div>

                <div style={{ marginTop: '4rem' }}>
                  <h5 className="technical" style={{ color: 'var(--navy)', marginBottom: '1.5rem' }}>LINKS</h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href={selected.github} target="_blank" rel="noreferrer" className="link-teal" style={{ fontWeight: 700 }}>GITHUB REPOSITORY</a>
                    <a href={selected.live} target="_blank" rel="noreferrer" className="link-teal" style={{ fontWeight: 700 }}>LIVE WEBSITE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="bg-sky shadow-soft" style={{ padding: '6rem 6vw', textAlign: 'center', marginTop: '0' }}>
        <h3 style={{ fontSize: '2.5rem', color: 'var(--navy)' }}>ARE YOU BUILDING SOMETHING INTERESTING?</h3>
        <a href="/contact" className="link-teal" style={{ display: 'inline-block', marginTop: '3rem', fontWeight: 700, fontSize: '1.2rem' }}>GET IN TOUCH</a>
      </section>

      <style jsx global>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .work-card:hover {
          transform: translateY(-5px) scale(1.01);
          box-shadow: 0 40px 100px rgba(47, 65, 86, 0.1);
        }
        .work-card:hover .card-image {
          transform: scale(1.02);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </main>
  );
}
