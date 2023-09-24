import React, { useEffect, useState } from 'react';
import '../styles/Projects.css'
import Header from '../components/Header'
import Box from '@mui/material/Box'
import { useThemeContext } from '../components/ThemeContext'


function Projects(){
  const { mode } = useThemeContext()
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })   
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Header/>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title}/>
          </div>
        ))}
      </div>
    </Box>
  )
}

export default Projects