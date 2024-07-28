import React from 'react';
import './projects.css';
import Workcard from '../workcard/workcard';
import projectData from './projectsData.json';

const Projects = () => {
  return (
    <div id='mywork'>
      <div className='myworkMain'>
        <h1>My Projects</h1>
        <div className='myworkContainer'>
          {projectData.map((cur,ind)=>{
            return (<Workcard key={ind} title={cur.title} applicationType={cur.applicationType} description={cur.description} />);
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects;