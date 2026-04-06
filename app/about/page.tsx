'use client';

import React from 'react';
import PretextHeading from '@/components/PretextHeading';

export default function About() {
  return (
    <main>
      {/* INTRO SECTION */}
      <section style={{ display: 'flex', gap: '8rem', minHeight: '90vh', alignItems: 'center', padding: '12rem 6vw' }}>
        <div style={{ flex: 1.5 }}>
          <span className="technical" style={{ color: 'var(--teal)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>THE MAIN CHARACTER</span>
          <PretextHeading 
            text="I'M JEEVAN."
            font="700 85px 'Playfair Display'"
            width={750}
            lineHeight={100}
            className="navy-text"
            style={{ marginTop: '1.5rem', color: 'var(--navy)' }}
          />
          <p style={{ marginTop: '3rem', fontSize: '1.6rem', color: '#567C8D', lineHeight: '1.8', maxWidth: '800px' }}>
            I identify problems worth solving. I’m not interested in just building things — I’m interested in building things that matter. 
            I approach every project as an opportunity to create measurable value, turning intent into execution.
          </p>
        </div>
        <div style={{ flex: 1, position: 'relative' }}>
          <div className="rounded-xl shadow-soft" style={{ width: '100%', aspectRatio: '4/5', background: 'var(--white)', overflow: 'hidden', position: 'relative', border: '1px solid rgba(47, 65, 86, 0.05)' }}>
            <img 
              src="/jeevan_portrait.png" 
              alt="H. Jeevan" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.1)' }} 
            />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
              <span className="technical" style={{ color: 'var(--white)', background: 'var(--navy)', padding: '0.4rem 1rem' }}>JXVZ01</span>
            </div>
          </div>
        </div>
      </section>

      {/* MINDSET SECTION */}
      <section className="bg-white" style={{ padding: '12rem 6vw' }}>
        <div style={{ maxWidth: '1000px' }}>
          <PretextHeading 
            text="HOW I THINK"
            font="700 40px 'Playfair Display'"
            width={450}
            lineHeight={50}
            className="navy-text"
            style={{ marginBottom: '3rem' }}
          />
          <h2 style={{ fontSize: '3.5rem', marginTop: '1rem', color: 'var(--navy)', fontWeight: 700 }}>VALUE-DRIVEN EXECUTION.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginTop: '4rem' }}>
            <p style={{ fontSize: '1.25rem', color: '#567C8D', lineHeight: '1.8' }}>
              I think beyond the code. For me, technology is a tool, not the destination. I take full ownership of the product lifecycle—understanding users, defining the problem space, and ensuring the final result actually solves something.
            </p>
            <p style={{ fontSize: '1.25rem', color: '#567C8D', lineHeight: '1.8' }}>
              Execution is everything. I focus on building, testing, and refining until an idea transforms into a usable product. I don't build for the sake of features; I build for outcomes, usability, and real-world impact.
            </p>
          </div>
        </div>
      </section>

      {/* INTERESTS SECTION */}
      <section style={{ padding: '12rem 6vw', background: 'var(--sky-blue)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
          <div>
            <p style={{ marginTop: '0', color: 'var(--navy)', fontSize: '1.4rem', fontWeight: 600, opacity: 0.9 }}>STRATEGIC AUTOMATION</p>
            <p style={{ marginTop: '2rem', color: 'var(--navy)', fontSize: '1.1rem', opacity: 0.8 }}>
              Leveraging intelligent systems to automate high-friction processes and deliver personalized value at scale.
            </p>
          </div>
          <div>
            <p style={{ marginTop: '0', color: 'var(--navy)', fontSize: '1.4rem', fontWeight: 600, opacity: 0.9 }}>PRODUCT ARCHITECTURE</p>
            <p style={{ marginTop: '2rem', color: 'var(--navy)', fontSize: '1.1rem', opacity: 0.8 }}>
              Designing modular, scalable frameworks that are built to evolve alongside user needs and market demands.
            </p>
          </div>
          <div>
            <p style={{ marginTop: '0', color: 'var(--navy)', fontSize: '1.4rem', fontWeight: 600, opacity: 0.9 }}>MARKET-DRIVEN DESIGN</p>
            <p style={{ marginTop: '2rem', color: 'var(--navy)', fontSize: '1.1rem', opacity: 0.8 }}>
              Bridging the gap between engineering and user experience to build products people actually want to use.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ padding: '10rem 6vw', textAlign: 'center', background: 'var(--beige)' }}>
        <h3 style={{ fontSize: '2.5rem', color: 'var(--navy)', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          If you're building something meaningful, I’d like to be part of it.
        </h3>
        <a href="/contact" className="link-teal" style={{ fontSize: '1.2rem', fontWeight: 700, display: 'inline-block', marginBottom: '8rem' }}>
          Get in touch
        </a>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', opacity: 0.5 }}>
          <a href="/" className="link-teal">HOME</a>
          <a href="/work" className="link-teal">WORK</a>
          <a href="/contact" className="link-teal">CONTACT</a>
        </div>
      </section>
    </main>
  );
}
