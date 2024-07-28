import React, { useState } from 'react';
import './about.css';
import educationData from './educationData.json';
import skillsData from './skillsData.json';
import experienceData from './experienceData.json';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <section id="education">
            <span className='educationTitle'>{skillsData.title}</span>
            <span className='educationDesc'>{skillsData.description}</span>
            <span className='educationBars'>
              {skillsData.skills.map((skill, index) => (
                <div className='educationBar' key={index}>
                  <h2>{skill.type}</h2>
                  <p>{skill.names}</p>
                  <p>{skill.experience}</p>
                </div>
              ))}
            </span>
          </section>
        );
      case 'education':
        return (
          <section id="education">
          <span className='educationTitle'>{educationData.title}</span>
          <span className='educationDesc'>{educationData.description}</span>
          <span className='educationBars'>
            {educationData.schools.map((school, index) => (
              <div className='educationBar' key={index}>
                <h2>{school.name}</h2>
                <p>{school.years}</p>
                <p>{school.cgpa}</p>
              </div>
            ))}
          </span>
        </section>
        );
      case 'experience':
        return (
          <section id="education">
            <span className='educationTitle'>{experienceData.title}</span>
            <span className='educationDesc'>{experienceData.description}</span>
            <span className='educationBars'>
              {experienceData.jobs.map((job, index) => (
                <div className='educationBar' key={index}>
                  <h2><span className='singleRow'>{job.name}</span > <span> {job.years}</span></h2>
                  <p>{job.position}</p>
                  <p>{job.details}</p>
                  
                </div>
              ))}
            </span>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div id='tabs'>
        <button onClick={() => setActiveTab('skills')} className='tabBtn'>Skills</button>
        <button onClick={() => setActiveTab('education')}className='tabBtn'>Education</button>
        <button onClick={() => setActiveTab('experience')}className='tabBtn'>Experience</button>
      </div>
      <div className='content'>
        {renderContent()}
      </div>
    </div>
  );
};

export default About;
