import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

function App() {
  const [isSending, setIsSending] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const formRef = useRef()
  const Toast = ({ message, type = "success", onClose }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose()
      }, 4000) // Auto hide after 4 seconds
      return () => clearTimeout(timer)
    }, [onClose])

    return (
      <div className={`toast toast-${type}`}>
        <svg className="toast-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
        <span>{message}</span>
        <button onClick={onClose} className="toast-close">×</button>
      </div>
    )
  }

  const [toast, setToast] = useState(null)

  const showToast = (message, type = "success") => {
    setToast({ message, type })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm(
        'service_zlmw1u4',
        'template_73r381m',
        formRef.current,
        'kiUPIs_A6mNEb35Xx'
      )
      .then(
        () => {
          showToast("Message sent successfully! Thank you for reaching out.", "success")
          setIsModalOpen(false)
          formRef.current.reset()
        },
        (error) => {
          console.error('EmailJS error:', error)
          showToast("Failed to send me a message. Try again or email me directly.", "error")
        }
      )
      .finally(() => {
        setIsSending(false)
      })
  }
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h3 className="logo">Franco Magno</h3>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Franco Sebastian C. Magno</span>
          </h1>
          <p className="hero-subtitle">Information Technology | Full Stack Developer</p>
          <p className="hero-desc">
            Graduating BSIT student passionate about web development, clean code, and building solutions that matter.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title-secondary">About Me</h2>

          <div className="about-grid">
            <div className="profile-picture">
              <img src="/profile.jpg" alt="Franco Sebastian C. Magno" className="profile-img" />
            </div>

            <div className="about-content">
              <div className="about-text">
                <p className="about-p">
                  I'm a graduating <strong>Bachelor of Science in Information Technology</strong> student from{' '}
                  <strong>Cebu Institute of Technology – University</strong>.
                </p>
                <p className="about-p">
                  I specialize in full-stack development using <strong>React</strong> and <strong>Java Spring Boot</strong>,
                  with a strong focus on writing clean, maintainable code and creating seamless user experiences.
                </p>
                <p className="about-p">
                  Beyond coding, I produce and perform music with my band, binge-watch series, and explore new music genres.
                </p>
              </div>

              <div className="about-info">
                <ul>
                  <li><strong>Name:</strong> Franco Sebastian C. Magno</li>
                  <li><strong>Degree:</strong> BS Information Technology</li>
                  <li><strong>Graduation:</strong> May 2026 (Expected)</li>
                  <li><strong>Location:</strong> Cebu City, Philippines</li>
                  <li><strong>Email:</strong>{' '}
                    <a href="mailto:franco.magno159@gmail.com" className="link">franco.magno159@gmail.com</a>
                  </li>
                </ul>

                <a href="/Magno Resume.pdf" download="Franco_Magno_Resume.pdf" className="btn resume">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Tools & Technologies</h2>
          <div className="skills-grid">
            {[
              'HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'Java Spring Boot',
              'PostgreSQL', 'MySQL', 'Git & GitHub', 'REST APIs', 'Postman',
              'Spring Initializr', 'Bootstrap', 'Tailwind CSS', 'Figma',
              'Visual Studio Code', 'IntelliJ IDEA', 'Eclipse IDE', 'Maven',
              'Vercel', 'Railway'
            ].map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title-secondary">Featured Projects</h2>
          <div className="projects-grid">

            {/* Quill */}
            <div className="project-card">
              <div className="project-image">
                <img src="/Quill.svg" alt="Quill Logo" className="project-logo" />
              </div>
              <div className="project-info">
                <h3>Quill</h3>
                <p className="project-desc">
                  A blockchain-powered notes app integrated with Lace Wallet — every CRUD operation requires a secure micro-transaction.
                </p>
                <div className="project-links">
                  <a href="https://github.com/Kato-Neko/Quill.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            {/* Civili.fy */}
            <div className="project-card">
              <div className="project-image">
                <img src="/logoiconwhite.png" alt="Civili.fy Logo" className="project-logo" />
              </div>
              <div className="project-info">
                <h3>Civili.fy</h3>
                <p className="project-desc">
                  Lawyer recruitment platform with real-time chat, connecting clients to verified legal experts across multiple fields.
                </p>
                <div className="project-links">
                  <a href="https://github.com/keithruezyl1/Civili.fy.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            {/* StartupSphere 2.0 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/startupsphere.png" alt="StartupSphere Logo" className="project-logo" />
              </div>
              <div className="project-info">
                <h3>StartupSphere 2.0</h3>
                <p className="project-desc">
                  Capstone project: A national digital hub connecting Filipino startups with funding, government programs, and resources.
                </p>
                <div className="project-links">
                  <a href="https://startupsphere-azure.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="https://github.com/princeprog/startupspherev2-frontend.git" target="_blank" rel="noopener noreferrer">Frontend</a>
                  <a href="https://github.com/princeprog/startupspherev2-backend.git" target="_blank" rel="noopener noreferrer">Backend</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact - Cleaner & Bolder */}
      <section id="contact" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-lead">
            I'm actively seeking <strong>internships</strong>, <strong>freelance projects</strong>, or <strong>junior developer roles</strong>.
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> franco.magno159@gmail.com</p>
            <p><strong>Phone:</strong> +63 905 342 0933</p>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/franco-sebastian-magno-896601317/" target="_blank" rel="noopener noreferrer">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor"> 
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z"/>  
                </svg>
              </a>
              <a href="https://github.com/Maggins08" target="_blank" rel="noopener noreferrer">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.553 3.297-1.553.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/francosebastian.magno/" target="_blank" rel="noopener noreferrer">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor"> 
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Message Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="floating-btn"
        aria-label="Send me a message"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <h2 className="modal-title">Send Me a Message</h2>
            <strong><p className="modal-subtitle">Connect with me!</p></strong>

            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" required placeholder="Input Name" />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="email" required placeholder="Input Email" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" required placeholder="Project Inquiry / Job Opportunity" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Hi Franco, I came across your portfolio and I'd love to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn modal-submit ${isSending ? 'sending' : ''}`}
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <footer>
        <p><strong>© 2025 Franco Sebastian C. Magno. All rights reserved.</strong></p>
      </footer>
    </>
  )
}

export default App