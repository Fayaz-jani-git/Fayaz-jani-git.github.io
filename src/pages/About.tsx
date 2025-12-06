import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './About.css';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Fayaz_Jani_Sheik_Resume.pdf';
    link.download = 'Fayaz_Jani_Sheik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-container">
      <Navbar />

      <div className="about-content">
        <div className="about-header">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">Cybersecurity Graduate | Support Engineer</p>
        </div>

        <div className="about-main">
          <div className="about-section">
            <h2>Who I Am</h2>
            <p>
              I am Fayaz Jani Sheik, a Cybersecurity Graduate with hands-on experience in 
              incident response, network defense, and secure coding practices. Based in 
              Austin, Texas, I have a proven track record in guiding labs on Python scripting 
              and Linux security while supporting incident investigations at Humata.AI.
            </p>
          </div>

          <div className="about-section">
            <h2>What I Do</h2>
            <p>
              With expertise in cybersecurity and networking, I specialize in incident 
              response, penetration testing, intrusion detection, and network traffic 
              analysis. I am passionate about securing systems, identifying vulnerabilities, 
              and implementing robust security solutions.
            </p>
          </div>

          <div className="about-section">
            <h2>My Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Cybersecurity</h3>
                <ul>
                  <li>Incident Response</li>
                  <li>Penetration Testing</li>
                  <li>Network Defense</li>
                  <li>SIEM & Intrusion Detection</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Networking</h3>
                <ul>
                  <li>TCP/IP & OSI Model</li>
                  <li>Firewalls & VPN</li>
                  <li>Network Traffic Analysis</li>
                  <li>DHCP & DNS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Programming</h3>
                <ul>
                  <li>Python</li>
                  <li>Bash Scripting</li>
                  <li>SQL</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools & Technologies</h3>
                <ul>
                  <li>Wireshark & Magnet Axiom</li>
                  <li>VMware & Docker</li>
                  <li>Linux (Kali, Ubuntu)</li>
                  <li>NIST Frameworks</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Education</h2>
            <div className="education-card">
              <h3>Bachelor of Science in Cybersecurity</h3>
              <p className="institution">Indiana Institute of Technology</p>
              <p className="duration">Graduation: May 2025 | GPA: 3.61</p>
            </div>
          </div>

          <div className="about-section">
            <h2>Connect With Me</h2>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/fayazjanisheik" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="mailto:fayazjani.sheik@gmail.com" className="social-btn">
                <FaEnvelope /> Email
              </a>
            </div>
          </div>

          <div className="resume-section">
            <button className="download-resume-btn" onClick={handleDownloadResume}>
              <FaDownload /> Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
