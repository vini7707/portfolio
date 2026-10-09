import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const projects = [
  { number: '01', name: 'Mastery TMS', type: 'BRIDGENEXT INDIA · 2021—2026', description: 'Web and mobile product experiences for a transportation management system. Performance work helped reduce application latency by 50% and improve query efficiency by 60%.', stack: ['React', 'React Native', 'TypeScript', 'GraphQL'], shape: 'mastery' },
  { number: '02', name: 'MGM Resorts Smart Queue', type: 'TEKISHUB · CLIENT: PUBLICIS SAPIENT', description: 'Responsive customer check-in and smart queue interfaces for MGM Resorts Line Buster and Smart Queue Management System.', stack: ['React', 'Redux', 'Jest', 'Cypress'], shape: 'mgm' },
  { number: '03', name: 'Devcollabs', type: 'DEVELOPER COLLABORATION PLATFORM', description: 'A full-stack platform for developer profiles and project management, with REST APIs, user management, and JWT authentication.', stack: ['React', 'Next.js', 'Node.js', 'JWT'], shape: 'devcollabs' },
  { number: '04', name: 'User Expenses', type: 'EXPENSE MANAGEMENT APPLICATION', description: 'Expense tracking with category management, real-time updates, responsive dashboards, and interactive spending reports.', stack: ['Expense tracking', 'Dashboards', 'Reporting'], shape: 'expenses' },
]

function Arrow({ diagonal = false }) { return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    const closeOnOutsideClick = event => {
      if (!navRef.current?.contains(event.target) && !event.target.closest('.menu-toggle')) closeMenu()
    }
    const closeOnEscape = event => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  return (
    <>
      <header className={menuOpen ? 'topbar topbar-open' : 'topbar'}>
        <a className="wordmark" href="#home" onClick={closeMenu}><span className="mark">V</span><span>VIKAS SRIVASTAVA</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'CLOSE −' : 'MENU +'}</button>
        <nav ref={navRef} className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#work">WORK <span>01</span></a><a href="#about">ABOUT <span>02</span></a><a href="#contact">CONTACT <span>03</span></a>
          <span className="availability"><i /> 5+ YEARS EXPERIENCE</span>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-top"><p className="eyebrow">SENIOR SOFTWARE DEVELOPER <span>—</span> FRONTEND</p><p className="eyebrow hero-date">PORTFOLIO / 2026</p></div>
          <div className="hero-title-wrap"><div className="hero-title"><h1>BUILDING<br /><span className="outline">BETTER</span> <span className="accent">PRODUCTS.</span></h1></div>
            <div className="hero-aside"><div className="orbit"><span>✳</span><i /><i /><i /></div><p>Senior software developer with 5+ years building responsive web and mobile applications, reusable interfaces, and API-connected product experiences.</p><a href="#work" className="text-link">EXPLORE SELECTED WORK <Arrow /></a></div>
          </div>
          <div className="hero-bottom"><span>REACT · TYPESCRIPT · GRAPHQL</span><span>WEB & MOBILE PRODUCT DELIVERY</span><span>↓ &nbsp; 01 / 04</span></div>
        </section>

        <section className="work section" id="work">
          <div className="section-head"><div><p className="eyebrow">SELECTED EXPERIENCE & PROJECTS <span>—</span> 2020—26</p><h2>Work built<br />to make an <em>impact.</em></h2></div><p className="section-note">Product work across transportation, hospitality, collaboration, and personal finance.</p></div>
          <div className="projects">{projects.map(project => <article className="project" key={project.number}>
            <a href="#contact" className={`project-art ${project.shape}`} aria-label={`Discuss ${project.name} project`}>
              <div className="art-top"><span>CONCEPT UI / {project.number}</span><span>↗</span></div>
              <div className={`art-content ${project.shape}`}>
                {project.shape === 'mastery' && <><div className="product-window"><div className="window-head"><b>mastery</b><span>OPERATIONS OVERVIEW</span></div><div className="window-kpis"><div><small>ACTIVE LOADS</small><strong>1,284</strong><i>+12.8%</i></div><div><small>ON-TIME RATE</small><strong>96.4%</strong><i>+4.2%</i></div><div><small>IN TRANSIT</small><strong>842</strong><i>LIVE</i></div></div><div className="route-row"><span>ORD → DFW</span><b>IN TRANSIT</b><i>•••••••••••••</i><span>09:42</span></div><div className="route-row"><span>LAX → PHX</span><b>ON SCHEDULE</b><i>•••••••••</i><span>10:18</span></div></div><div className="product-badge">50%<small>LESS LATENCY</small></div></>}
                {project.shape === 'mgm' && <><div className="queue-phone"><div className="queue-notch"/><small>MGM RESORTS</small><b>Your place,<br />made easier.</b><span>Current wait</span><strong>08 <small>MIN</small></strong><i>You're all set</i></div><div className="queue-ticket"><small>LINE BUSTER</small><b>GUEST<br />CHECK-IN</b><span>YOUR QUEUE <strong>#08</strong></span></div></>}
                {project.shape === 'devcollabs' && <><div className="collab-title"><small>DEV COLLABS / COMMUNITY</small><b>Good work<br />happens together.</b></div><div className="collab-card"><span className="avatar avatar-one">A</span><div><b>Alex Morgan</b><small>Frontend developer</small></div><i>PROJECT LEAD</i></div><div className="collab-card collab-second"><span className="avatar avatar-two">J</span><div><b>Jordan Lee</b><small>Product designer</small></div><i>DESIGN</i></div><div className="collab-tag">PROJECT<br />COLLABORATION <span>↗</span></div></>}
                {project.shape === 'expenses' && <><div className="expense-card"><small>MONTHLY SPENDING</small><b>$2,480<span>.50</span></b><i>↓ 8.2% from last month</i><div className="expense-chart"><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/></div><div className="expense-labels"><span>WEEK 01</span><span>WEEK 02</span><span>WEEK 03</span><span>WEEK 04</span></div></div><div className="expense-ring"><span>BY<br/>CATEGORY</span></div></>}
              </div>
              <div className="art-bottom"><span>{project.name.toUpperCase()}</span><span>EXPLORE PROJECT ↗</span></div>
            </a>
            <div className="project-meta"><div><p className="eyebrow">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p></div><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div><a href="#contact" className="project-arrow" aria-label={`View ${project.name}`}><Arrow diagonal /></a></div>
          </article>)}</div>
          <a className="all-work" href="mailto:vikash.sriva012@gmail.com?subject=Let%E2%80%99s%20talk%20about%20your%20work">HAVE A PROJECT IN MIND? <span>LET’S TALK <Arrow diagonal /></span></a>
          <div className="experience"><div className="experience-heading"><p className="eyebrow">PROFESSIONAL EXPERIENCE</p><span>5+ YEARS</span></div><article className="experience-item"><div className="experience-dates">JUL 2021 — JUN 2026</div><div><h3>Senior Software Development Engineer / Full Stack Developer</h3><p>BridgeNext India Pvt. Ltd. <span>·</span> Pune, India</p><small>Mastery Transport Management System</small></div><b>01</b></article><article className="experience-item"><div className="experience-dates">DEC 2020 — MAY 2021</div><div><h3>React Developer</h3><p>Tekishub Consulting Services Pvt. Ltd. <span>·</span> Hyderabad, India</p><small>Client: Publicis Sapient · MGM Resorts Smart Queue</small></div><b>02</b></article><div className="education-row"><div className="eyebrow">EDUCATION & CERTIFICATION</div><p><strong>B.E., Annamalai University</strong> · 2013—2017</p><p><strong>Diploma in Oracle SQL Developer</strong> · 2020</p></div></div>
        </section>

        <section className="about section" id="about">
          <div className="section-head"><div><p className="eyebrow">PROFILE <span>—</span> 02</p><h2>Thoughtful<br />interfaces.<br /><em>Measurable</em><br />results.</h2></div><div className="about-copy"><p className="about-lead">I’m Vikas Srivastava, a frontend-focused software engineer with 5+ years of experience building responsive web and mobile applications.</p><p>My work spans React, React Native, TypeScript, and GraphQL, from reusable UI architecture and API integration through testing, production support, and delivery with product and backend teams.</p><p>I’ve contributed to the full software development life cycle in Agile teams and received the BridgeNext Excellence Award for 2022–2023.</p><a href="mailto:vikash.sriva012@gmail.com" className="text-link">CONTACT ME <Arrow diagonal /></a></div></div>
          <div className="skills-row"><p className="eyebrow">TECHNICAL SKILLS</p><div className="skills-grid"><div><h3>Frontend</h3><p>React.js · React Native · Next.js<br />JavaScript · TypeScript · Redux<br />HTML · CSS · Tailwind</p></div><div><h3>Backend & data</h3><p>Node.js · NestJS · GraphQL<br />Apollo · REST APIs · PostgreSQL<br />MongoDB</p></div><div><h3>Quality & tools</h3><p>Jest · Cypress · Appium · E2E testing<br />Git · GitHub · Postman · New Relic<br />Agile · Scrum · JIRA</p></div></div></div>
        </section>

        <section className="contact section" id="contact"><p className="eyebrow">GET IN TOUCH <span>—</span> 03</p><div className="contact-main"><h2>Let’s build<br />something <em>useful.</em></h2><a href="mailto:vikash.sriva012@gmail.com" className="contact-link">EMAIL VIKAS <Arrow diagonal /></a></div><div className="contact-details"><a href="mailto:vikash.sriva012@gmail.com">vikash.sriva012@gmail.com</a><a href="tel:+916394376600">+91 63943 76600</a><a href="https://www.linkedin.com/in/vikas-srivastava-0a6221139" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a><a href="https://github.com/vini7707" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a></div></section>
      </main>
      <footer><a className="wordmark" href="#home"><span className="mark">V</span><span>VIKAS SRIVASTAVA</span></a><span>DESIGNED & BUILT WITH CARE · © 2026</span><a href="#home">BACK TO TOP ↑</a></footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
