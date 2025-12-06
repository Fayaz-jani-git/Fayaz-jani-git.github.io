import React from 'react';
import './Recommendations.css';

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <div>
            <h3>Professor Patricia Tanner</h3>
            <p>Indiana Institute of Technology</p>
            <p className="date">2023</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>"I am pleased to recommend Fayaz Jani Sheik, who has been an exceptional Research Assistant in our department. Fayaz partnered with me to design and structure a comprehensive Masters degree program, demonstrating remarkable research skills and attention to detail."</p>
          <p>"His ability to synthesize data from peer institutions and professional organizations to propose relevant course topics was impressive. Fayaz conducted in-depth research on curriculum frameworks, course outcomes, and accreditation requirements with great professionalism."</p>
          <p>"Beyond his research capabilities, Fayaz has shown excellent teaching abilities as a Teaching Assistant, leading labs on Python scripting and Linux security practices. His dedication to improving student proficiency in secure coding and incident handling concepts has been invaluable."</p>
          <p>"I wholeheartedly recommend Fayaz for any cybersecurity or security engineering position. His technical skills, combined with his strong communication abilities and work ethic, make him an outstanding candidate."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
